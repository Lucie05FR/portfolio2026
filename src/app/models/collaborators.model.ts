export interface Collaborator {
  firstName: string;
  lastName: string;
  email?: string;
  linkedin?: string;
  link?: string;
}

export type CollaboratorKey =
  | 'leabarnezet'
  | 'mathisrodier'
  | 'elyneblanchard'
  | 'benjaminrobert'
  | 'amandinemotta'
  | 'thomasperrin'
  | 'anaskadar';

export const collaborators: Record<CollaboratorKey, Collaborator> = {
  leabarnezet: {
    firstName: 'Léa',
    lastName: 'Barnezet',
    email: 'leabarneze@gmail.com',
    linkedin: 'https://www.linkedin.com/in/léa-barnezet-333aa8267/',
    link: 'https://siteportfolio-production-c26a.up.railway.app',
  },
  mathisrodier: {
    firstName: 'Mathis',
    lastName: 'Rodier',
    linkedin: 'https://www.linkedin.com/in/mathis-rodier-9ba410355/',
  },
  elyneblanchard: {
    firstName: 'Elyne',
    lastName: 'Blanchard',
    linkedin: 'https://www.linkedin.com/in/elyne-blanchard-313319333/',
  },
  benjaminrobert: {
    firstName: 'Benjamin',
    lastName: 'Robert',
    linkedin: 'https://www.linkedin.com/in/benjamin-robert-5a959b351/',
    link: 'https://www.lesluong.fr/profil-benjamin-robert',
  },
  amandinemotta: {
    firstName: 'Amandine',
    lastName: 'Motta',
    linkedin: 'https://www.linkedin.com/in/amandine-motta/',
  },
  thomasperrin: {
    firstName: 'Thomas',
    lastName: 'Perrin',
    linkedin: 'https://www.linkedin.com/in/thomas-perrin01/',
  },
  anaskadar: {
    firstName: 'Anas',
    lastName: 'Kadar',
    linkedin: 'https://www.linkedin.com/in/anas-kadar-975ab9204/',
  },
};
