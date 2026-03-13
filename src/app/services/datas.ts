import { ProjectModel } from '../models/project.model';

export const projectsDetails: ProjectModel[] = [
  // -------------------------------------------------------------------------
  {
    order: 5,
    name: "Création d'un site de recettes",
    shortDescription: 'Un site de recettes en PHP',
    description:
      "En duo, création d'un site de permettant la gestion de recettes de cuisine avec une base de données SQL. Seul l'administrateur peut ajouter ou modifier les recettes. Pour la partie des visiteurs, il est possible de consulter l'ensemble des recettes, leurs étapes de préparation et les ingrédients nécessaires. Il est également possible de faire générer une liste de courses, celle-ci recensera tout les ingrédients nécessaires ainsi que leur quantités en fonction des recettes présentent dans la liste. Projet réalisé durant ma seconde année de BUT informatique.",
    productTime: 'Février 2025 - Avril 2025',
    pictures: [
      { emplacement: 'img1.jpg', description: 'Première page du site' },
      { emplacement: 'img2.jpg', description: 'Page connexion' },
      { emplacement: 'img3.jpg', description: "Page édition d'une recette" },
      { emplacement: 'img4.jpg', description: "Page affichage d'une recette" },
    ],
    madeFor: "l'université Lyon 1",
    collaborators: ['leabarnezet'],
    langage: ['HTML', 'CSS', 'PHP', 'SQL'],
    framework: 'CakePHP',
    IDE: 'PHPStorm',
    other: 'GitLab',
    subject: 'Web',
  },
  // -------------------------------------------------------------------------
  {
    order: 4,
    name: "Création d'un site de jeu de piste",
    shortDescription:
      'Un site web pour la gestion et une application mobile pour les joueurs',
    description:
      "Le projet consiste à créer une application mobile qui est destinée à de nouveaux élèves afin qu\'ils puissent visiter les bâtiments de  l\'université de manière amusante. <br> A côté de ça, un site web est accessible pour la personne qui sera en charge de préparer le jeu. Ce site a pour but de gérer le jeu de piste avant qu\'il ne soit jouable pour les élèves. Cette organisation consiste à s\'occuper de créer les énigmes, les paramètres de la partie et les lieux à visiter.",
    details:
      "Ce projet a sollicité 4 développeurs, nous avons décidé de faire des sous-équipes : 2 pour le back, 2 pour le front. Même si nous avons finalement tous plus ou moins touché aux deux, cela nous a permis de nous répartir plus efficacement les tâches. J\'ai principalement travaillé sur le visuel du site et de l\'application, par exemple j\'ai eu l\'occasion de beaucoup travailler sur les maquettes. Durant la création du site ou de l\'application, j\'ai travaillé sur le placement et le visuel des éléments. J\'ai aussi fait, par exemple, de faire en sorte qu\'un groupe d\'éléments ne se voient pas tous sans que l\'utilisateur ne le souhaite. J\'ai pu faire plusieurs pages qui ont pour but de regrouper un ensemble d\'éléments (des énigmes, des parties, ...) que j\'ai dû aller chercher dans la base de données. Projet de ma 2ème année de BUT informatique.",
    productTime: 'Septembre 2024 - Mars 2025',
    pictures: [
      {
        emplacement: 'img22.png',
        description: 'Logo du projet',
      },
      { emplacement: 'img6.png', description: 'Poster expliquant le projet' },
      { emplacement: 'img7.png', description: 'Première page du site' },
    ],
    madeFor: "l'université Lyon 1",
    collaborators: ['leabarnezet', 'elyneblanchard', 'benjaminrobert'],
    langage: ['Dart'],
    framework: 'Flutter',
    IDE: 'AndroidStudio',
    software: ['Canva', 'Trello'],
    other: ['GitLab', 'Firebase'],
    subject: ['Web', 'Mobile'],
  },
  // -------------------------------------------------------------------------
  {
    order: 3,
    name: "Création d'un site de presse",
    shortDescription:
      "Un site web permettant de gérer un blog d'articles de presse",
    description:
      "Projet visant à apprendre à maitriser le PHP. Créer un site de gestion d'un blog d'articles, gérer les abonnements des visiteurs aux blogs, la créations et la gestion d'articles pour les utilisateurs connéctés. Exercice durant ma 2ème année de BUT informatique.",
    productTime: 'Septembre 2024 - Octobre 2024',
    pictures: [
      { emplacement: 'img8.png', description: 'Première page du site' },
    ],
    madeFor: "l'université Lyon 1",
    langage: ['HTML', 'CSS', 'PHP', 'SQL'],
    IDE: 'VSCode',
    other: 'GitLab',
    subject: 'Web',
  },
  // -------------------------------------------------------------------------
  {
    order: 2,
    name: 'Un puissance 4 sur ESP32',
    shortDescription:
      "Implémentation d'un puissance 4 jouable sur un ou deux ESP32 connectés",
    description:
      'En duo, créer un puissance 4 jouable depuis un ESP 32, jouable avec un joystick et les leds (8x8) lié au microcontrolleur, le jeu peu se faire sur un unique ESP 32 ou deux différents connéctés. Projet durant ma 1ère année de BUT informatique.',
    productTime: 'Mai 2024',
    pictures: [
      { emplacement: 'img9.jpg', description: "Photograpie d'un ESP32" },
    ],
    madeFor: "l'université Lyon 1",
    collaborators: ['amandinemotta'],
    langage: 'Processing',
    IDE: 'ArduinoIDE',
    other: 'GitLab',
    subject: 'Programmation',
  },
  // -------------------------------------------------------------------------
  {
    order: 8,
    name: 'Création de mon portfolio',
    shortDescription:
      'Un site web pour la gestion et une application mobile pour les joueurs',
    description:
      "Ce site a été créé dans le but de recenser toutes mes réalisations individuelles et collaboratifs, mes compétences en développement informatique. Il me permet aussi d\'alimenter à chaques nouveau projet, nouvelle compétences. Grâce à ça, les personnes succeptibles d\'être intéressé par mon profil ont accès en détail à mes acquis. Projet personnel.",
    productTime: 'Mars 2026',
    langage: ['HTML', 'CSS', 'TypeScript'],
    framework: 'Angular',
    IDE: 'VSCode',
    other: 'GitHub',
    subject: 'Web',
  },
  // -------------------------------------------------------------------------
  {
    order: 1,
    name: "Création d'un nonogramme",
    shortDescription:
      'Une application pour apprendre à maitriser les bases du développement',
    description:
      "En équipe de 3, l'objectif de ce projet est de créer un jeu de nonogramme. Ce jeu de réflexion basé sur la logique, se joue sur une grille où chaque ligne et colonne est accompagnée d'indices numériques indiquant la répartition des cases à noircir ou colorier. L'application finale contient 3 modes : jouer sur des images en noir et blanc, jouer sur des images en couleur ou alors créer un dessin sur lequel on peut ensuite jouer. Projet durant ma 1ère année de BUT informatique.",
    productTime: 'Janvier 2024',
    pictures: [
      { emplacement: 'img11.png', description: 'Vision du gameplay' },
      {
        emplacement: 'img12.png',
        description: 'Vision du gameplay de la version en couleur',
      },
    ],
    madeFor: "l'université Lyon 1",
    collaborators: ['leabarnezet', 'amandinemotta'],
    langage: 'Processing',
    other: 'GitLab',
    subject: 'Programmation',
  },
  // -------------------------------------------------------------------------
  {
    order: 0,
    name: "Reconstruction d\'un site web",
    shortDescription: "Revue d'un site d'un club de badminton",
    description:
      "En duo, recréer un site web existant, étudié les évolutions possibles du site pour l\'améliorer. Projet durant ma 1ère année de BUT informatique.",
    productTime: 'Décembre 2023 - Janvier 2024',
    pictures: [
      { emplacement: 'img13.jpg', description: 'Première page du site' },
      { emplacement: 'img14.jpg', description: 'Page du site' },
      { emplacement: 'img15.jpg', description: 'Page du site' },
    ],
    madeFor: "l'université Lyon 1",
    langage: ['HTML', 'CSS'],
    IDE: 'VSCode',
    software: 'Canva',
    other: 'GitLab',
    subject: 'Web',
  },
  // -------------------------------------------------------------------------
  {
    order: 7,
    name: "Entretien d'un site web",
    shortDescription: 'Entretenir le site web des Estivales de Brou',
    description:
      "Ce site a été créé dans le but de recenser toutes mes réalisations individuelles et collaboratifs, mes compétences en développement informatique. Il me permet aussi d\'alimenter à chaques nouveau projet, nouvelle compétences. Grâce à ça, les personnes succeptibles d\'être intéressé par mon profil ont accès en détail à mes acquis. Projet personnel.",
    productTime: 'Septembre 2025 - Mars 2026',
    pictures: [
      {
        emplacement: 'img21.png',
        description: 'Logo des Estivales de Brou',
      },
      { emplacement: 'img16.png', description: 'Première page du site' },
    ],
    collaborators: ['anaskadar', 'leabarnezet', 'thomasperrin'],
    langage: ['HTML', 'CSS', 'TypeScript'],
    framework: 'NextJs',
    IDE: 'VSCode',
    software: 'Trello',
    other: ['GitLab', 'Docker', 'phpMyAdmin', 'Mailhog'],
    subject: 'Web',
    link: 'https://estivalesdebrou.fr',
  },

  // -------------------------------------------------------------------------
  {
    order: 6,
    name: "Implémentation d'un système d'inventaire",
    shortDescription:
      "Ajout d'un inventaire à une architechture déjà mise en place",
    description:
      'Projet réalisé seule en 2 mois lors de mon stage de 2ᵉ année de BUT : développement d’un outil pour le Greta de l’Ain permettant de centraliser la gestion de son parc informatique (gestion des équipements, système de prêts et gestion d’images système).',
    productTime: 'Septembre 2025 - Mars 2026',
    pictures: [
      {
        emplacement: 'img20.png',
        description: "Logo du Greta CFA de l'Ain",
      },
      {
        emplacement: 'img19.png',
        description:
          'Modale d\'ajout de prêt catégorie "Prêts", vue d\'un administrateur',
      },
      {
        emplacement: 'img17.png',
        description: "Page de gestion des prêts, vue d'un utilisateur",
      },
      {
        emplacement: 'img18.png',
        description:
          'Modale affichant les détails d\'un prêt catégorie "emprunteur", vue d\'un utilisateur',
      },
    ],
    madeFor: "le Greta de l'Ain",
    langage: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    IDE: 'VSCode',
    other: ['phpMyAdmin', 'Navicat', 'Wamp', 'Bitvise', 'Fog', 'MariaDB'],
    subject: 'Web',
  },
  // -------------------------------------------------------------------------
  {
    order: 9,
    name: 'Regroupement de simulateurs',
    shortDescription:
      'Un site web pour la gestion et une application mobile pour les joueurs',
    description:
      'Développement en binôme d’un outils regroupant les simulateurs existant de l’entreprise. Projet réalisé durant mon alternance (septembre 2025 à aout 2026), je me suis concentré sur le front du projet, j’ai utilisé la librairie de l’entreprise et voila voila',
    details: 'A',
    productTime: 'Septembre 2025 - Aout 2026',
    pictures: [
      {
        emplacement: 'img23.png',
        description: "Logo de l'entreprise",
      },
    ],
    madeFor: 'Scantech',
    collaborators: 'mathisrodier',
    langage: ['TypeScript', 'CPP', 'SCSS', 'HTML'],
    framework: 'Angular',
    IDE: 'VSCode',
    software: 'Jira',
    other: ['GitLab', 'Bruno', 'MQTT'],
    subject: ['Web'],
  },

  // -------------------------------------------------------------------------
  {
    order: 999,
    name: 'TEST',
    shortDescription: 'desc',
    description: 'desc2',
    productTime: 'temps',
    langage: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    IDE: 'VSCode',
    other: ['phpMyAdmin', 'Navicat', 'Wamp', 'Bitvise', 'Fog', 'MariaDB'],
    subject: 'Web',
  },
];
