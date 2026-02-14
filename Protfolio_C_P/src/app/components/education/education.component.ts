import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
  gpa?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  readonly educationData: EducationItem[] = [
    {
      degree: 'MSc in Chemistry',
      institution: 'University of Kerala',
      period: '2022 – 2024',
      details: [
        'Specialization: Analytical Chemistry'
      ],
    },
    {
      degree: 'BSc in Chemistry',
      institution: 'University of Kerala',
      period: '2018 – 2021',
      details: [
        'Major: Chemistry'
      ],
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Kerala Board of Education',
      period: '2016 – 2018',
      details: [
        'Science stream with Chemistry specialization',
      ],
    },
    {
      degree: 'SSLC (10th Standard)',
      institution: 'Kerala Board of Education',
      period: '2015 – 2016',
    },
  ];
}
