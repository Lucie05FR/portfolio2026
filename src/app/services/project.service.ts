import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { projectsDetails } from './datas';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projects: ProjectModel[] = projectsDetails;

  getProjects(): ProjectModel[] {
    return [...this.projects];
  }

  getProjectByName(name: string): ProjectModel | undefined {
    return this.projects.find((p) => p.name === name);
  }

  getProjectByOrder(id: number): ProjectModel | undefined {
    return this.projects.find((p) => p.order === id);
  }
  getProjectsByOrder() {
    
  }
}
