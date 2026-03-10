import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public projectService: ProjectService) {}

  isArray(element: any): boolean {
    return Array.isArray(element);
  }

  get sortedProjects() {
    return [...this.projectService.projects].sort((a, b) => b.order - a.order);
  }
}
