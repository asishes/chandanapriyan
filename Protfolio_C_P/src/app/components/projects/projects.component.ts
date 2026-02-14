import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  focus: string[];
  tools: string[];
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Selective Identification of 2,4-Diaminopyrimidine-5-Carbonitrile Cored Small Molecule Ligand for JAK2 Pseudokinase Domain',
      description:
        'Research project focusing on molecular docking and virtual screening studies using computational chemistry methods to identify and validate potential drug ligands against JAK2 pseudokinase domain.',
      focus: [
        'Molecular docking studies',
        'Virtual screening',
        'Ligand-receptor binding analysis',
        'Computational validation'
      ],
      tools: ['BIOVIA Discovery Studio', 'AutoDock', 'MarvinSketch', 'Molecular visualization'],
      icon: '🧬',
    },
    {
      title: 'Medicinal Chemistry as a Tool for Survival – SARS-CoV-2 Review',
      description:
        'Comprehensive literature review on medicinal chemistry approaches for COVID-19 drug development, covering therapeutic strategies, drug design principles, and recent advancements in antiviral research.',
      focus: [
        'Antiviral drug design',
        'SARS-CoV-2 target analysis',
        'Therapeutic strategies',
        'Structure-activity relationships'
      ],
      tools: ['Literature review', 'Structural analysis', 'Database research', 'Chemical documentation'],
      icon: '🦠',
    },
  ];
}

