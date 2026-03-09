import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projects: ProjectModel[];

  constructor() {
    
    this.projects = [new ProjectModel('nomBidon', 'Université Lyon 1'), new ProjectModel('nomTropCool', 'Greta de l\'Ain', undefined)];
  }

  getProjects(): ProjectModel[] {
    return [...this.projects];
  }
}
