import { Component, Input } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { Technologie, TechnologieCategory, technologies } from '../models/technologies.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project?: ProjectModel;

  constructor() {
    if (this.project) throw new Error('No project selected');
  }

  isArray(element: any): boolean {
    return Array.isArray(element);
  }

  toArray(value: string | string[] | undefined): string[] {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }

  getTechno(category: TechnologieCategory, key: string): Technologie {
    return (
      (technologies[category] as Record<string, Technologie>)[key] ?? {
        title: key,
      }
    );
  }
}
