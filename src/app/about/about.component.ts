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
      title: 'Baccalauréat Général',
      description:
        'Lycée Saint-Exupéry, Valserhône - Spécialités Mathématiques et Numérique & Sciences Informatiques (NSI)',
      icon: 'mortarboard',
    },
    {
      date: '2023 - 2026',
      title: 'BUT Informatique',
      description:
        "Parcours Réalisation d'Applications : conception, développement et validation - IUT Claude Bernard Lyon 1, site de Bourg-en-Bresse",
      icon: 'laptop',
    },
    {
      date: 'Avril - Juin 2025',
      title: "Stage - Greta CFA de l'Ain",
      description:
        'Mission au sein du service informatique dans le cadre de ma 2ème année de BUT',
      icon: 'briefcase',
      project: 6,
    },
    {
      date: '2025 - 2026',
      title: 'Alternance - Scantech',
      description: "Contrat d'apprentissage réalisé en 3ème année de BUT",
      icon: 'building',
      project: 13,
    },
  ];

  constructor(public router: Router) {}

  goToProject(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }
}
