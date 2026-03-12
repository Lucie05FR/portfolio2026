import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import {
  subjectType,
  Technologie,
  TechnologieCategory,
  technologies,
} from '../models/technologies.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  projects: any;

  constructor(public projectService: ProjectService) {
    this.projects = this.projectService.getSortedProjects();
  }
  selectedSubject: subjectType | null = null;

  get filteredProjects() {
    const sorted = [...this.projectService.projects].sort(
      (a, b) => b.order - a.order,
    );
    if (!this.selectedSubject) return sorted;
    return this.projectService.getProjectsBySubject(this.selectedSubject);
  }

  isArray(element: any): boolean {
    return Array.isArray(element);
  }

  getSubjects() {
    return this.projectService.getAvailableSubjects();
  }

  getTechno(category: TechnologieCategory, key: string) {
    return (
      (technologies[category] as Record<string, any>)[key] ?? { title: key }
    );
  }

  selectSubject(subject: subjectType | null) {
    this.selectedSubject = subject;
  }
}
