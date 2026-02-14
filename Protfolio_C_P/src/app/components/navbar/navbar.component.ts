import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
  offset: number;
}

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  readonly navLinks: NavLink[] = [
    { label: 'Home', href: '#home', offset: 0 },
    { label: 'About', href: '#about', offset: 800 },
    { label: 'Education', href: '#education', offset: 1600 },
    { label: 'Experience', href: '#experience', offset: 2400 },
    { label: 'Skills', href: '#skills', offset: 3200 },
    { label: 'Projects', href: '#projects', offset: 4000 },
    { label: 'Certifications', href: '#certifications', offset: 4800 },
    { label: 'Activities', href: '#activities', offset: 5600 },
    { label: 'Contact', href: '#contact', offset: 6400 },
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:chandanapriyan29@gmail.com', icon: 'email' },
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
