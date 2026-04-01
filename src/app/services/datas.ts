import { ProjectModel } from '../models/project.model';

export const projectsDetails: ProjectModel[] = [
  // -------------------------------------------------------------------------
  {
    order: 0,
    name: "Reconstruction d\'un site web",
    shortDescription:
      "Refonte complète du site web d'un club de badminton, avec analyse des améliorations possibles.",
    description:
      "Projet réalisé en binôme consistant à recréer et moderniser le site web existant d'un club de badminton. Au delà de la reconstruction visuelle, nous avons analysé les axes d'amélioration du site original afin de proposer une version plus claire et plus fonctionnelle. Projet réalisé en 1ère année de BUT Informatique.",
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
    order: 1,
    name: "Création d'un nonogramme",
    shortDescription:
      'Application de jeu de nonogramme en trois modes : noir et blanc, couleur et création de grille personnalisée.',
    description:
      "Projet consistant à développer un jeu de nonogramme en Processing. Le principe : résoudre une grille en noircissant les bonnes cases à partir d'indices numériques placés sur chaque ligne et colonne. L'application propose trois modes de jeu : résolution en noir et blanc, résolution en couleur, et un mode créatif permettant de dessiner sa propre grille pour ensuite la jouer. Projet réalisé en 1ère année de BUT Informatique.",
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
    order: 2,
    name: 'Un puissance 4 sur ESP32',
    shortDescription:
      "Implémentation d'un Puissance 4 sur microcontrôleur ESP32, jouable en local ou entre deux ESP32 connectés.",
    description:
      "Projet consistant à développer un Puissance 4 entièrement embarqué sur ESP32. Le jeu se joue via un joystick et s'affiche sur une matrice de LEDs 8x8 reliée au microcontrôleur. Deux modes sont disponibles : un mode local sur un seul ESP32, et un mode multijoueur entre deux ESP32 communicants. Projet réalisé en 1ère année de BUT Informatique.",
    productTime: 'Mai 2024',
    pictures: [
      { emplacement: 'img9.jpg', description: "Photograpie d'un ESP32" },
    ],
    madeFor: "l'université Lyon 1",
    collaborators: ['amandinemotta'],
    langage: 'Processing',
    IDE: 'ArduinoIDE',
    other: ['GitLab', 'ESP32'],
    subject: 'Programmation',
  },

  // -------------------------------------------------------------------------
  {
    order: 3,
    name: "Création d'un site de presse",
    shortDescription:
      "Un site web permettant de gérer un blog d'articles de presse",
    description:
      "Application web développée en PHP permettant la gestion complète d'un blog de presse. Les visiteurs peuvent s'abonner aux blogs de leur choix, tandis que les utilisateurs connectés disposent d'outils pour créer, modifier et administrer leurs articles. Projet réalisé en 2ème année de BUT Informatique pour approfondir la maîtrise du PHP.",
    productTime: 'Septembre 2024 - Octobre 2024',
    pictures: [
      { emplacement: 'img8.png', description: 'Première page du site' },
    ],
    madeFor: "l'université Lyon 1",
    langage: ['HTML', 'CSS', 'PHP', 'SQL'],
    database: 'MySQL',
    IDE: 'VSCode',
    other: 'GitLab',
    subject: 'Web',
  },

  // -------------------------------------------------------------------------
  {
    order: 4,
    name: "Création d'un site de jeu de piste",
    shortDescription:
      "Application mobile de jeu de piste pour les nouveaux étudiants, accompagnée d'un site web de gestion pour les organisateurs.",
    description:
      "Ce projet combine une application mobile ludique destinée aux nouveaux étudiants pour découvrir les bâtiments de l'université, et un site web de gestion permettant aux organisateurs de préparer le jeu de piste. Le site couvre la création des énigmes, la configuration des parties et la gestion des lieux à visiter.",
    details:
      "Projet réalisé en équipe de 4 développeurs, organisés en binômes front/back. Mon travail sur ce projet a principalement concerné la partie visuelle du site et de l'application : conception des maquettes, mise en page des éléments, et développement de plusieurs pages de liste récupérant dynamiquement des données depuis la base de données (énigmes, parties...). J'ai également travaillé sur la progression des joueurs et structuré la navigation entre les différentes pages.",
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
    order: 5,
    name: "Création d'un site de recettes",
    shortDescription:
      'Un site de gestion de recettes de cuisine avec système de rôles et génération automatique de listes de courses.',
    description:
      "Projet de développement d'un site de recettes multi-profils : visiteurs, utilisateurs connectés et administrateur. Chaque profil dispose de fonctionnalités adaptées, navigation libre pour les visiteurs, création de listes de courses personnalisées pour les membres, et gestion complète du catalogue pour l'administrateur.",
    details:
      "L'objectif principal était de transformer dynamiquement une sélection de recettes en liste de courses exploitable, tout en proposant une interface de gestion intuitive du contenu culinaire, recettes, ingrédients, étapes et images.",
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
    database: 'MySQL',
    other: 'GitLab',
    subject: 'Web',
  },

  // -------------------------------------------------------------------------
  {
    order: 6,
    name: 'Cinémas de France',
    shortDescription:
      'Application mobile recensant les cinémas de France avec géolocalisation et fiches détaillées.',
    description:
      "Application mobile exploitant une API publique recensant les cinémas français (TMDB). Elle propose une carte interactive affichant les cinémas à proximité de l'utilisateur grâce à la géolocalisation, une liste complète des établissements avec leurs informations clés, et une page de détail pour chaque cinéma.",
    productTime: 'Mars 2025',
    pictures: [
      { emplacement: 'img36.png', description: "Logo de l'application" },
      { emplacement: 'img38.jpg', description: 'Page de la map' },
      {
        emplacement: 'img39.jpg',
        description: 'Onglet listant tout les cinémas',
      },
      { emplacement: 'img37.jpg', description: "Page détails d'un cinéma" },
    ],
    madeFor: "l'université Lyon 1",
    langage: ['Java', 'XML'],
    IDE: 'AndroidStudio',
    other: 'GitHub',
    subject: 'Mobile',
    link: 'https://github.com/Lucie05FR/AppliCinemasFrancais',
  },

  // -------------------------------------------------------------------------
  {
    order: 7,
    name: "Implémentation d'un système d'inventaire, gestion d'un parc informatique",
    shortDescription:
      "Développement d'un outil de gestion du parc informatique pour le Greta de l'Ain, intégré à une architecture existante.",
    description:
      "Projet réalisé seule durant mon stage de 2ème année de BUT au Greta de l'Ain. L'objectif était de centraliser la gestion du parc informatique des 5 sites de l'établissement : recensement des équipements, système de prêts et gestion des images système. L'outil s'intègre à l'architecture existante en exploitant la base de données de Fog Project.",
    details:
      "J'ai conçu et développé une base de données sous phpMyAdmin pour gérer le matériel, les images système et les prêts d'équipements. Ce projet m'a permis de travailler en autonomie complète sur l'ensemble du cycle de développement, de la conception de la base de données à l'implémentation de l'interface de gestion.",
    productTime: 'Avril 2025 - Juin 2025',
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
    framework: 'Bootstrap',
    IDE: 'VSCode',
    database: 'MariaDB',
    other: ['phpMyAdmin', 'Navicat', 'Wamp', 'Bitvise', 'Fog'],
    subject: 'Web',
  },

  // -------------------------------------------------------------------------
  {
    order: 8,
    name: "Gestionnaire d'emplois du temps",
    shortDescription:
      "Application de gestion de ressources et d'emplois du temps pour étudiants et professeurs.",
    description:
      "Projet réalisé en binôme consistant à développer une application web de gestion d'emplois du temps. L'application distingue deux profils : étudiants et professeurs. Elle permet de gérer des cours, d'inscrire des élèves et d'affecter des professeurs, tout en s'assurant de l'absence de conflits horaires. Chaque utilisateur peut rendre son emploi du temps public ou privé, et les professeurs accèdent automatiquement aux plannings de leurs étudiants.",
    details:
      'Le projet intègre une authentification par token, une API REST respectant la nomenclature des codes HTTP, et une séparation stricte des responsabilités entre contrôleurs, services et couche API.',
    productTime: '2 mois',
    pictures: [
      {
        emplacement: 'img29.png',
        description: "Page s'inscrire à un cours",
      },
      {
        emplacement: 'img30.png',
        description: "Page de l'emploi du temps",
      },
      {
        emplacement: 'img27.png',
        description: 'Page gestion de profil',
      },
      {
        emplacement: 'img28.png',
        description: 'Page gestion des cours',
      },
      {
        emplacement: 'img31.png',
        description: 'routes',
      },
    ],
    madeFor: "l'université Lyon 1",
    langage: ['HTML', 'CSS', 'TypeScript'],
    framework: ['VueJs', 'Express'],
    librairie: ['PrimeVue', 'Sequelize'],
    database: 'SQLite',
    IDE: 'PHPStorm',
    other: ['GitLab', 'Swagger'],
    subject: 'Web',
    collaborators: 'leabarnezet',
  },

  // -------------------------------------------------------------------------
  {
    order: 9,
    name: 'TvTime - Gestionnaire de films & séries',
    shortDescription:
      'Application web de gestion de films et séries personnel.',
    description:
      "Application web exploitant l'API TMDB pour recenser films et séries. Les utilisateurs connectés peuvent créer et éditer des listes personnalisées, suivre leurs visionnages et catégoriser chaque contenu selon leur ressenti. Une barre de recherche permet de trouver rapidement n'importe quel titre.",
    productTime: 'Décembre 2025',
    pictures: [
      {
        emplacement: 'img32.png',
        description: "Page d'acceuil",
      },
      {
        emplacement: 'img33.png',
        description: 'Connexion à un compte',
      },
      {
        emplacement: 'img34.png',
        description: "Page d'un film",
      },
      {
        emplacement: 'img35.png',
        description: 'Page gestion des listes et historique de visionnage',
      },
    ],
    madeFor: "l'université Lyon 1",
    langage: ['HTML', 'CSS', 'PHP'],
    framework: 'Symfony',
    database: 'MySQL',
    IDE: 'PHPStorm',
    other: 'GitHub',
    subject: 'Web',
    link: 'https://developer.themoviedb.org/reference/getting-started',
    collaborators: 'leabarnezet',
  },

  // -------------------------------------------------------------------------
  {
    order: 10,
    name: 'Spotify',
    shortDescription:
      "Recréation d'une expérience Spotify avec recherche, favoris, playlists et recommandations personnalisées.",
    description:
      "Projet de développement d'une application web inspirée de Spotify, exploitant l'API Spotify pour proposer une expérience musicale complète. L'application permettait de rechercher des musiques et artistes, gérer des favoris et des playlists, et recevoir des recommandations personnalisées basées sur ses écoutes. Un système de profil utilisateur complétait l'ensemble.",
    details:
      "Le projet n'est aujourd'hui plus fonctionnel suite aux restrictions imposées par Spotify sur son API publique, qui ont rendu l'intégration impossible.",
    productTime: 'Octobre 2025 - Novembre 2025',
    madeFor: "l'université Lyon 1",
    langage: ['HTML', 'CSS', 'PHP'],
    framework: 'Symfony',
    database: 'MySQL',
    IDE: 'PHPStorm',
    other: 'GitHub',
    subject: 'Web',
    link: 'https://github.com/Lucie05FR/Spotify',
  },

  // -------------------------------------------------------------------------
  {
    order: 11,
    name: 'Mini monde Mario',
    shortDescription:
      "Mini jeu 3D inspiré de l'univers Mario, développé avec Three.js et navigable à la première personne.",
    description:
      "Projet de développement d'un mini monde 3D inspiré de l'univers Mario, entièrement réalisé avec Three.js. Le joueur évolue à la première personne dans un environnement interactif : déplacements au clavier et à la souris, sauts, collecte de pièces et récupération d'étoile. Le monde propose également un cycle jour/nuit activable à la demande.",
    details:
      "L'objectif était de prendre en main Three.js et les bases de la 3D dans un contexte web. Le projet intègre la gestion des collisions, des déplacements en première personne, un système de score et des effets d'éclairage pour le changement de temporalité. Tous les objets 3D ont été récupérés depuis sketchfab.com.",
    productTime: '8h',
    pictures: [
      {
        emplacement: 'img5.png',
        description: 'Image du gameplay près du chateau',
      },
      {
        emplacement: 'img10.png',
        description: 'Image du gameplay game over',
      },
      {
        emplacement: 'img24.png',
        description: 'Image du gameplay pièce',
      },
      {
        emplacement: 'img25.png',
        description: 'Image du gameplay partie gagné',
      },
      {
        emplacement: 'img26.png',
        description: 'Image du gameplay mode nuit',
      },
    ],
    madeFor: "l'université Lyon 1",
    langage: ['HTML', 'CSS', 'JavaScript'],
    librairie: 'ThreeJs',
    IDE: 'PHPStorm',
    subject: ['Web', 'Programmation'],
  },

  // -------------------------------------------------------------------------
  {
    order: 12,
    name: 'Création de mon portfolio',
    shortDescription:
      'Portfolio personnel présentant mes projets, compétences et parcours de développeuse.',
    description:
      "Portfolio conçu pour centraliser l'ensemble de mes réalisations et compétences en développement informatique. Régulièrement mis à jour au fil de mes projets, il permet à tout recruteur ou curieux d'explorer mon profil en détail.",
    details:
      "Projet personnel et évolutif, qui m'a également permis de progresser sur Angular, Bootstrap et la structuration d'une application front-end complète. Il a été pensé et conçu intelligemment pour qu'il soit pratique à entretenir.",
    productTime: 'Mars 2026',
    langage: ['HTML', 'SCSS', 'TypeScript'],
    framework: ['Angular', 'Bootstrap'],
    IDE: 'VSCode',
    other: 'GitHub',
    subject: 'Web',
    link: 'https://github.com/Lucie05FR/portfolio2026',
  },

  // -------------------------------------------------------------------------
  {
    order: 13,
    name: "Entretien d'un site web",
    shortDescription:
      "Maintenance et évolution du site web de l'association des Estivales de Brou.",
    description:
      "Mission de maintenance et d'amélioration du site web de l'Association des Soirées Estivales de Brou, une association culturelle franco-suisse produisant des spectacles lyriques et soutenant les jeunes artistes professionnels. Le travail consistait à assurer la mise à jour des frameworks, la maintenance technique du site existant et l'ajout de nouvelles fonctionnalités au backoffice.",
    details:
      "J'ai principalement contribué à la conception et au développement de l'espace choriste, une section entièrement nouvelle du site dédiée aux participants de l'Atelier Vocal Départemental. Projet réalisé en 3ème année de BUT Informatique en alternance.",
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
    framework: ['NextJs', 'TailwindCSS'],
    IDE: 'VSCode',
    software: 'Trello',
    other: ['GitLab', 'Docker', 'phpMyAdmin', 'Mailhog'],
    subject: 'Web',
    link: 'https://estivalesdebrou.fr',
  },

  // -------------------------------------------------------------------------
  {
    order: 14,
    name: 'Luminaire intelligent connecté (ESP32)',
    shortDescription:
      'Développement d’un luminaire connecté permettant d’automatiser et de piloter l’éclairage à distance via une interface web.',

    description:
      'Conception et développement d’un système de luminaire intelligent basé sur un microcontrôleur ESP32, intégrant des capteurs de luminosité et de mouvement. Le dispositif collecte des données en temps réel afin d’adapter automatiquement l’éclairage selon l’environnement. Une interface web permet à l’utilisateur de contrôler les luminaires à distance (allumage, extinction, choix de couleur) et de configurer les paramètres (seuils, capteurs, intensité). Le projet repose sur une architecture complète incluant un objet connecté, une API, une base de données et une interface web.',

    details:
      'Solution intelligente, personnalisable et évolutive, mettant en œuvre une architecture complète objet connecté / API / interface web.',
    productTime: 'Mars 2026',
    pictures: [
      {
        emplacement: 'img43.png',
        description: 'ESP32 configuration',
      },
      {
        emplacement: 'img40.png',
        description: 'Page de connexion',
      },
      {
        emplacement: 'img41.png',
        description: 'Page de gestion des paramètres',
      },
      {
        emplacement: 'img42.png',
        description: "Page de création d'un luminaire",
      },
      {
        emplacement: 'img44.png',
        description: 'Architecture du projet',
      },
    ],
    collaborators: 'leabarnezet',
    langage: ['HTML', 'SCSS', 'TypeScript', 'CPP'],
    framework: ['Angular', 'Bootstrap'],
    IDE: ['VSCode', 'ArduinoIDE'],
    software: 'Canva',
    other: ['GitLab', 'ESP32'],
    subject: 'Web',
  },

  // -------------------------------------------------------------------------
  {
    order: 15,
    name: 'Regroupement de simulateurs',
    shortDescription:
      "Développement d'une interface centralisée regroupant les simulateurs internes de Scantech pour faciliter les tests et démonstrations.",
    description:
      "Scantech est une entreprise spécialisée dans l'industrie des scanners industriels. Ses développeurs ont conçu plusieurs simulateurs utilisés en interne pour des tests et pourraient être utilisés lors de démonstrations auprès de clients. L'objectif de ce projet est de regrouper ces simulateurs au sein d'un outil central unifié, facilitant leur accès et leur utilisation au quotidien.",
    details:
      "Projet faisant l'objet de mon alternance chez Scantech, de ma dernière année de BUT. Je suis concentrée principalement sur la partie front-end, en utilisant la librairie interne de l'entreprise. Une expérience enrichissante qui me permet de m'adapter à un contexte professionnel réel, avec des contraintes techniques et des standards de code propres à l'entreprise.",
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
];
