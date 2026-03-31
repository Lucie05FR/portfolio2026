import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectService } from '../services/project.service';
import {
  Technologie,
  TechnologieCategory,
  technologies,
} from '../models/technologies.model';

const categoryColors: Partial<Record<TechnologieCategory, string>> = {
  langage: 'bg-secondary border',
  framework: 'bg-dark border',
  librairie: 'border',
  IDE: 'bg-dark',
  database: '',
  software: 'bg-secondary',
  other: 'border',
};

interface SkillDisplay extends Technologie {
  category: TechnologieCategory;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  skills: SkillDisplay[] = [];

  ngOnInit() {
    const categories: TechnologieCategory[] = [
      'langage',
      'framework',
      'librairie',
      'IDE',
      'database',
      'software',
      'other',
    ];

    const all: SkillDisplay[] = categories
      .flatMap((category) =>
        Object.values(technologies[category]).map((tech: Technologie) => ({
          ...tech,
          category,
          color: categoryColors[category] ?? 'text-light',
        })),
      )
      .filter((t) => t.icon);

    this.skills = all.sort(() => Math.random() - 0.5).slice(0, 15);
  }

  constructor(public projectService: ProjectService) {}

  isArray(element: any): boolean {
    return Array.isArray(element);
  }

  get displayedProjects() {
    return this.projectService.getSortedProjects().slice(0, 4);
  }

  @ViewChild('skillsContainer') skillsContainer!: ElementRef;

  ngAfterViewInit() {
    this.initSkillsAnimation();
  }

  initSkillsAnimation() {
    const container = this.skillsContainer.nativeElement;
    const badges = Array.from(
      container.querySelectorAll('.skill-badge'),
    ) as HTMLElement[];
    const width = 700;
    const height = 350;
    const placed: { x: number; y: number; w: number; h: number }[] = [];
    const padding = 15;

    badges.forEach((badge: HTMLElement) => {
      const bw = badge.offsetWidth;
      const bh = badge.offsetHeight;
      let x = 0;
      let y = 0;
      let attempts = 0;
      let valid = false;

      while (!valid && attempts < 500) {
        x = (Math.random() - 0.5) * width;
        y = (Math.random() - 0.5) * height;

        valid = placed.every((p) => {
          const overlapX = Math.abs(x - p.x) < (bw + p.w) / 2 + padding;
          const overlapY = Math.abs(y - p.y) < (bh + p.h) / 2 + padding;
          return !(overlapX && overlapY);
        });

        attempts++;
      }

      placed.push({ x, y, w: bw, h: bh });
      badge.style.setProperty('--x', `${x}px`);
      badge.style.setProperty('--y', `${y}px`);
      badge.style.setProperty('--float-delay', `${Math.random() * 2}`);
    });
  }
}
