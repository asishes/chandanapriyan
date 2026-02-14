import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  title: string;
  organization: string;
  year: string;
  type: string;
  details?: string[];
}

@Component({
  selector: 'app-academic-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic-activities.component.html',
  styleUrls: ['./academic-activities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademicActivitiesComponent {
  readonly activities: Activity[] = [
    {
      title: 'National Conference on Pharmaceutical Sciences',
      organization: 'Society of Pharmaceutical Scientists India (SPSI)',
      year: '2023',
      type: 'Conference',
      details: [
        'Participation in national-level pharmaceutical research conference',
        'Exposure to latest analytical chemistry methodologies',
        'Networking with industry professionals'
      ]
    },
    {
      title: 'APMCT 2023 Seminar',
      organization: 'Association of Pharmaceutical & Medical Chemistry Teachers',
      year: '2023',
      type: 'Seminar',
      details: [
        'Workshop on advanced analytical techniques',
        'Training on instrumental analysis methods',
        'Presentation of laboratory research'
      ]
    },
    {
      title: 'Kerala Knowledge Economy Mission (KKEM) Workshop',
      organization: 'Department of Education, Kerala',
      year: '2022',
      type: 'Workshop',
      details: [
        'Training on professional skills development',
        'Exposure to emerging technologies',
        'Career development guidance'
      ]
    },
    {
      title: 'Laboratory Research & Analysis Projects',
      organization: 'University of Kerala',
      year: '2021-2024',
      type: 'Research',
      details: [
        'Conducted water quality testing projects',
        'Advanced analytical chemistry research',
        'Publication of research findings'
      ]
    }
  ];
}
