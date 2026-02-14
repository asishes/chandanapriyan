import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  readonly certifications: Certification[] = [
    {
      title: 'Diploma in Computer Applications',
      issuer: 'C-DIT (Govt. of Kerala)',
      year: '2024',
      description: 'Office automation and computer skills certification'
    },
    {
      title: 'Tally ERP 9 with GST',
      issuer: 'Professional Institute',
      year: '2023',
      description: 'Enterprise accounting and GST compliance training'
    },
    {
      title: 'Employability Skills Training',
      issuer: 'Department of Education, Kerala',
      year: '2023',
      description: 'Professional development and workplace skills'
    },
    {
      title: 'NCC B & C Certificate',
      issuer: 'National Cadet Corps, India',
      year: '2020',
      description: 'National service training and leadership development'
    },
  ];
}
