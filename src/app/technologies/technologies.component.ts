import { Component } from '@angular/core';
import {
  technologies,
  TechnologieCategory,
  Technologie,
  TechnoSection,
  categoryColors,
} from '../models/technologies.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  sections = TechnoSection;
  categoryColors = categoryColors;

  getEntries(
    category: TechnologieCategory,
  ): { key: string; tech: Technologie }[] {
    return Object.entries(technologies[category]).map(([key, tech]) => ({
      key,
      tech,
    }));
  }
}
