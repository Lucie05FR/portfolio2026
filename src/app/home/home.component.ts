import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showAll = false;

  constructor(public projectService: ProjectService) {}

  isArray(element: any): boolean {
    return Array.isArray(element);
  }

  get displayedProjects() {
    return this.projectService
      .getSortedProjects()
      .slice(0, this.showAll ? undefined : 4);
  }
}
