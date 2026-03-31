import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { projectsDetails } from './datas';
import { subjectType } from '../models/technologies.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projects: ProjectModel[] = [...projectsDetails].sort(
    (a, b) => b.order - a.order,
  );

  getProjects(): ProjectModel[] {
    return [...this.projects];
  }

  getProjectByName(name: string): ProjectModel | undefined {
    return this.projects.find((p) => p.name === name);
  }

  getProjectByOrder(id: number): ProjectModel | undefined {
    return this.projects.find((p) => p.order === id);
  }

  getSortedProjects() {
    return [...this.projects].sort((a, b) => b.order - a.order);
  }

  getProjectsBySubject(subject: subjectType) {
    return this.projects.filter((p) =>
      Array.isArray(p.subject)
        ? p.subject.includes(subject)
        : p.subject === subject,
    );
  }

  getAvailableSubjects(): subjectType[] {
    const all = this.projects.flatMap((p) =>
      Array.isArray(p.subject) ? p.subject : p.subject ? [p.subject] : [],
    );
    return [...new Set(all)];
  }
}
