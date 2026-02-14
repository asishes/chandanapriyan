import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { AcademicActivitiesComponent } from './components/academic-activities/academic-activities.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoadingScreenComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    AcademicActivitiesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  scrollProgress = 0;
  private scrollListener?: () => void;
  private progressBarRef?: HTMLElement | null;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.progressBarRef = document.querySelector('.scroll-progress') as HTMLElement;
    // Run outside Angular zone to avoid triggering change detection on every scroll
    this.ngZone.runOutsideAngular(() => {
      this.scrollListener = () => this.updateScrollProgress();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
    });
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private updateScrollProgress(): void {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (windowHeight > 0) {
      const scrolled = (window.scrollY / windowHeight) * 100;
      this.scrollProgress = Math.min(scrolled, 100);

      if (this.progressBarRef) {
        this.progressBarRef.style.width = `${this.scrollProgress}%`;
      }
    }
  }
}
