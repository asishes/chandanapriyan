import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Highlight {
  label: string;
  value: string;
  icon: string;
}

const ICON_MAP: Record<string, string> = {
  standard: '📋',
  analysis: '🔬',
  compliance: '✓',
  instrument: '⚗',
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly highlights: Highlight[] = [
    { label: 'Years Experience', value: '1+', icon: 'standard' },
    { label: 'Tests Performed', value: '500+', icon: 'analysis' },
    { label: 'Standards Known', value: 'IS, FSSAI', icon: 'compliance' },
    { label: 'Instruments', value: '5+', icon: 'instrument' },
  ];

  readonly keywords: string[] = [
    'IS 10500 Standards',
    'FSSAI Methods',
    'UV-Visible Spectrophotometer',
    'Flame Photometer',
    'GLP Compliance',
    'Water Quality Testing',
    'Physicochemical Analysis',
    'Wastewater Testing'
  ];

  getIcon(iconName: string): string {
    return ICON_MAP[iconName] || '✨';
  }
}
