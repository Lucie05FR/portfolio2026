import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface elementInterface {
  icon?: string;
  title: string;
  description: string;
  link?: string;
  project?: number;
  date?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public centreInterets: {
    icon: string;
    title: string;
    description: string;
  }[] = [
    {
      icon: 'film',
      title: 'Le cinéma',
      description: 'Découvrir des films, regarder des séries ...',
    },
    {
      icon: 'music-note-beamed',
      title: 'La musique',
      description: 'Ecouter de la musique',
    },
    {
      icon: 'code',
      title: 'Le développement informatique',
      description: 'Apprendre de nouvelles technologies',
    },
  ];

  public timeline: elementInterface[] = [
    {
      date: '2023',
      title: 'Baccalauréat général',
      description:
        'Lycée Saint-Exupéry, Valserhône. Spécialités mathématiques et informatique',
      icon: 'mortarboard',
    },
    {
      date: '2023 - 2026',
      title: 'BUT Informatique',
      description:
        "Parcours réalisation d'applications à l'université Lyon 1 Claude Bernard site de Bourg-en-Bresse",
      icon: 'laptop',
    },
    {
      date: 'Avril - Juin 2025',
      title: 'Stage',
      description:
        "Effectué durant ma deuxième année de mon BUT, au service informatique du Greta CFA de l'Ain",
      icon: 'briefcase',
      project: 6,
    },
    {
      date: '2025 - 2026',
      title: 'Alternance',
      description: 'Effectué durant ma troisième année de mon BUT, à Scantech',
      icon: 'building',
      project: 9,
    },
  ];

  constructor(public router: Router) {}

  goToProject(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }
}
