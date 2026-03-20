import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectModel } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import {
  Collaborator,
  CollaboratorKey,
  collaborators,
} from '../models/collaborators.model';
import {
  LangageKey,
  Technologie,
  TechnologieCategory,
  technologies,
  TechnoSection,
} from '../models/technologies.model';

declare var bootstrap: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  project?: ProjectModel;
  sections = TechnoSection;
  public technoIndex = 0;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
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

  getTechno(
    category: TechnologieCategory,
    key: string | LangageKey,
  ): Technologie {
    return (
      (technologies[category] as Record<string, Technologie>)[key] ?? {
        title: key,
      }
    );
  }

  redirectError() {
    this.router.navigate(['no-project-found']);
  }

  ngAfterViewInit() {
    const popoverElements = document.querySelectorAll(
      '[data-bs-toggle="popover"]',
    );
    const popoverInstances: any[] = [];

    popoverElements.forEach((el) => {
      popoverInstances.push(new bootstrap.Popover(el));
    });

    // Ferme au clic en dehors
    document.addEventListener('click', (event) => {
      popoverElements.forEach((el, i) => {
        if (!el.contains(event.target as Node)) {
          popoverInstances[i].hide();
        }
      });
    });
  }

  getCollaboratorLinks(collaborator: Collaborator): string {
    return `<div class="d-flex flex-column gap-2">
              <a href="${collaborator.linkedin}" target="_blank" class="text-decoration-none">
                <i class="bi bi-linkedin"></i>
                LinkedIn
              </a>
              <a href="${collaborator.link}" target="_blank" class="text-decoration-none">
                <i class="bi bi-link-45deg"></i>
                Autre lien
              </a>
            </div>`;
  }

  selectedImage?: { src: string; alt: string };

  openImage(picture: any) {
    this.selectedImage = {
      src: 'assets/projects-images/' + picture.emplacement,
      alt: picture.description,
    };
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }

  setTechnoIndex() {
    this.technoIndex++;
  }
}
