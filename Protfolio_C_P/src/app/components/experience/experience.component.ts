import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  position: string;
  company: string;
  duration: string;
  isActive: boolean;
  responsibilities: string[];
  type?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Chemist',
      company: 'Water Care Laboratories',
      duration: '2025 – Present',
      isActive: true,
      type: 'Current Role',
      responsibilities: [
        'Drinking water & wastewater testing',
        'IS 10500 compliance testing procedures',
        'Physicochemical & microbiological analysis',
        'Instrument operation: UV-Visible Spectrophotometer, Flame Photometer',
        'Laboratory documentation & data recording',
        'Test result analysis and reporting',
      ],
    },
    {
      position: 'Junior Analyst Trainee',
      company: 'Care KERALAM Pvt Ltd',
      duration: '2024 – 2025',
      isActive: false,
      type: 'Previous Experience',
      responsibilities: [
        'Food & edible oil analysis following FSSAI protocols',
        'Physicochemical testing of water samples',
        'Instrument calibration and maintenance',
        'GLP-compliant documentation and record keeping',
        'Quality assurance and result verification',
        'Test report preparation and client communication',
      ],
    },
  ];
}
