import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  category: 'analysis' | 'instrumentation' | 'software';
  proficiency: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [
    // Laboratory Analysis
    { name: 'Water Quality Testing', icon: '💧', category: 'analysis', proficiency: 95 },
    { name: 'Physicochemical Analysis', icon: '🧪', category: 'analysis', proficiency: 90 },
    { name: 'Wastewater Analysis', icon: '🌊', category: 'analysis', proficiency: 85 },
    { name: 'IS 10500 Standards', icon: '📋', category: 'analysis', proficiency: 90 },
    { name: 'FSSAI Methods', icon: '✓', category: 'analysis', proficiency: 88 },
    { name: 'GLP Compliance', icon: '📑', category: 'analysis', proficiency: 85 },
    { name: 'Quality Assurance', icon: '🎯', category: 'analysis', proficiency: 90 },

    // Instrumentation
    { name: 'UV-Vis Spectrophotometer', icon: '🔬', category: 'instrumentation', proficiency: 90 },
    { name: 'Flame Photometer', icon: '🔥', category: 'instrumentation', proficiency: 85 },
    { name: 'Instrument Calibration', icon: '⚙️', category: 'instrumentation', proficiency: 85 },
    { name: 'Equipment Maintenance', icon: '🔧', category: 'instrumentation', proficiency: 80 },

    // Software
    { name: 'BIOVIA Discovery Studio', icon: '💻', category: 'software', proficiency: 75 },
    { name: 'MarvinSketch', icon: '🎨', category: 'software', proficiency: 80 },
    { name: 'AutoDock', icon: '🧬', category: 'software', proficiency: 75 },
    { name: 'MS Word', icon: '📝', category: 'software', proficiency: 90 },
    { name: 'MS Excel', icon: '📊', category: 'software', proficiency: 85 },
  ];

  analysisSkills = this.skills.filter(s => s.category === 'analysis');
  instrumentationSkills = this.skills.filter(s => s.category === 'instrumentation');
  softwareSkills = this.skills.filter(s => s.category === 'software');
}
