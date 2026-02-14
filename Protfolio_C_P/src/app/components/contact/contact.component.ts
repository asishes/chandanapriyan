import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const SUBMIT_DELAY_MS = 1500;
const SUCCESS_MESSAGE_DURATION_MS = 5000;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnDestroy {
  readonly contactInfo: ContactInfo[] = [
    {
      icon: '�',
      label: 'Email',
      value: 'chandanapriyan29@gmail.com',
      link: 'mailto:chandanapriyan29@gmail.com',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Thrissur, Kerala, India',
      link: '#',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com',
    },
    {
      icon: '⚗️',
      label: 'Professional',
      value: 'Analytical Chemist',
      link: '#',
    },
  ];

  formData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;
  submitSuccess = false;
  private successMessageTimeout?: ReturnType<typeof setTimeout>;

  ngOnDestroy(): void {
    if (this.successMessageTimeout) {
      clearTimeout(this.successMessageTimeout);
    }
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      alert('Please fill in all fields');
      return;
    }

    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.formData = { name: '', email: '', message: '' };

      // Hide success message after delay
      this.successMessageTimeout = setTimeout(() => {
        this.submitSuccess = false;
      }, SUCCESS_MESSAGE_DURATION_MS);
    }, SUBMIT_DELAY_MS);
  }

  private isFormValid(): boolean {
    return !!this.formData.name && !!this.formData.email && !!this.formData.message;
  }

  openLink(link: string): void {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  }
}
