import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import {
  subjects,
  subjectType,
  TechnologieCategory,
  technologies,
} from '../models/technologies.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  selectedSubject: subjectType | null = null;
  private routeSub?: Subscription;

  constructor(
    public projectService: ProjectService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const subject = params.get('subject');
      if (subject && subjects.includes(subject as subjectType)) {
        this.selectedSubject = subject as subjectType;
      } else {
        this.selectedSubject = null;
      }
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

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
