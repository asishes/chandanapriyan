import { Component, OnInit, OnDestroy, HostListener, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  id: number;
  x: number;
  y: number;
  type: 1 | 2 | 3 | 4;
  duration: number;
  delay: number;
}

const PARTICLE_COUNT = 8;
const PARTICLE_INTERVAL = 3000;
const PARTICLE_INFLUENCE_RADIUS = 150;
const PARTICLE_DURATION_MIN = 5;
const PARTICLE_DURATION_MAX = 9;
const MAX_PARTICLES = 30;
const MOUSE_THROTTLE_MS = 32; // ~30fps for deflection (less critical)

let particleIdCounter = 0;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly PARTICLE_INFLUENCE_RADIUS = PARTICLE_INFLUENCE_RADIUS;

  scrollY = 0;
  particles: Particle[] = [];
  mouseX = 0;
  mouseY = 0;

  private particleGenerationInterval?: ReturnType<typeof setInterval>;
  private scrollListener?: () => void;
  private particleCleanupTimers: ReturnType<typeof setTimeout>[] = [];
  private lastMouseDeflectionTime = 0;
  private isDestroyed = false;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.setupScrollListener();
      this.startParticleGeneration();
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    this.cleanup();
  }

  trackParticle(_index: number, particle: Particle): number {
    return particle.id;
  }

  private setupScrollListener(): void {
    this.scrollListener = () => {
      this.scrollY = window.scrollY;
    };
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    const now = performance.now();
    if (now - this.lastMouseDeflectionTime > MOUSE_THROTTLE_MS) {
      this.ngZone.runOutsideAngular(() => this.deflectParticles());
      this.lastMouseDeflectionTime = now;
    }
  }

  private deflectParticles(): void {
    const particleElements = document.querySelectorAll('.particle') as NodeListOf<HTMLElement>;

    particleElements.forEach(particle => {
      const rect = particle.getBoundingClientRect();
      const particleX = rect.left + rect.width / 2;
      const particleY = rect.top + rect.height / 2;

      const dx = this.mouseX - particleX;
      const dy = this.mouseY - particleY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < PARTICLE_INFLUENCE_RADIUS) {
        const force = (1 - distance / PARTICLE_INFLUENCE_RADIUS) * 30;
        const angle = Math.atan2(dy, dx);
        const offsetX = -Math.cos(angle) * force;
        const offsetY = -Math.sin(angle) * force;
        particle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      } else {
        particle.style.transform = '';
      }
    });
  }

  private startParticleGeneration(): void {
    this.generateParticles();
    this.particleGenerationInterval = setInterval(() => {
      if (!this.isDestroyed) {
        this.generateParticles();
      }
    }, PARTICLE_INTERVAL);
  }

  private generateParticles(): void {
    // Cap total particles to prevent memory bloat
    if (this.particles.length >= MAX_PARTICLES) return;

    const count = Math.min(PARTICLE_COUNT, MAX_PARTICLES - this.particles.length);
    for (let i = 0; i < count; i++) {
      const particle: Particle = {
        id: particleIdCounter++,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: (Math.floor(Math.random() * 4) + 1) as 1 | 2 | 3 | 4,
        duration: PARTICLE_DURATION_MIN + Math.random() * (PARTICLE_DURATION_MAX - PARTICLE_DURATION_MIN),
        delay: Math.random() * 0.5,
      };

      this.particles.push(particle);

      const timer = setTimeout(() => {
        if (this.isDestroyed) return;
        const index = this.particles.findIndex(p => p.id === particle.id);
        if (index > -1) {
          this.particles.splice(index, 1);
        }
      }, (particle.duration + particle.delay) * 1000);
      this.particleCleanupTimers.push(timer);
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private cleanup(): void {
    if (this.particleGenerationInterval) {
      clearInterval(this.particleGenerationInterval);
    }

    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }

    this.particleCleanupTimers.forEach(t => clearTimeout(t));
    this.particleCleanupTimers = [];
    this.particles = [];
  }
}
