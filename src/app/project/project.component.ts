import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { Collaborator, CollaboratorKey, collaborators } from '../models/collaborators.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  project?: ProjectModel;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = this.projectService.getProjectByOrder(+id);
    }
    if (!this.project) {
      throw new Error('Aucun projet séléctionné, projet inexistant');
    }
  }

  isArray(element: any): boolean {
    return Array.isArray(element);
  }

  toArray(value: string | string[] | undefined): string[] {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }

  getCollaborators(keys: string | string[]): Collaborator[] {
    const arr = Array.isArray(keys) ? keys : [keys];
    return arr
      .map((key) => collaborators[key as CollaboratorKey])
      .filter(Boolean);
  }
}
