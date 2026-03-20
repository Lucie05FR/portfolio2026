export interface Technologie {
  title: string;
  icon?: string;
}

export const langages = [
  'HTML',
  'CSS',
  'SCSS',
  'PHP',
  'CPP',
  'Java',
  'Processing',
  'Dart',
  'Python',
  'SQL',
  'JavaScript',
  'XML',
  'TypeScript',
] as const;
export type langageType = (typeof langages)[number];

export const frameworks = [
  'CakePHP',
  'Flutter',
  'Symfony',
  'Angular',
  'React',
  'VueJs',
  'NextJs',
  'Bootstrap',
  'TailwindCSS',
  'Express',
] as const;
export type frameworkType = (typeof frameworks)[number];

export const librairies = ['ThreeJs', 'PrimeVue', 'Sequelize'] as const;
export type librairieType = (typeof librairies)[number];

export const IDE = [
  'VSCode',
  'IntelliJ',
  'AndroidStudio',
  'QtCreator',
  'ArduinoIDE',
  'Spyder',
  'PHPStorm',
] as const;
export type IDEType = (typeof IDE)[number];

export const databases = [
  'MySQL',
  'SQLite',
  'MongoDB',
  'Neo4j',
  'MariaDB',
] as const;
export type databaseType = (typeof databases)[number];

export const softwares = [
  'Canva',
  'Trello',
  'Inkscape',
  'Notion',
  'Jira',
] as const;

export type softwareType = (typeof softwares)[number];

export const other = [
  'GitHub',
  'GitLab',
  'Bruno',
  'Postman',
  'phpMyAdmin',
  'Navicat',
  'Firebase',
  'MQTT',
  'Wamp',
  'Bitvise',
  'Fog',
  'Docker',
  'Mailhog',
  'Swagger',
] as const;

export type otherType = (typeof other)[number];

export const subjects = ['Programmation', 'Web', 'Mobile'] as const;
export type subjectType = (typeof subjects)[number];

export type TechnologieCategory =
  | 'langage'
  | 'framework'
  | 'librairie'
  | 'IDE'
  | 'database'
  | 'software'
  | 'other'
  | 'subject';

interface TechnoSection {
  category: TechnologieCategory;
  label: string;
  icon?: string;
}

export const TechnoSection: TechnoSection[] = [
  {
    category: 'langage',
    label: 'Langage',
    icon: 'code-slash',
  },
  {
    category: 'framework',
    label: 'Framework',
    icon: 'stack',
  },
  { category: 'librairie', label: 'Librairie', icon: 'box' },
  { category: 'IDE', label: 'IDE', icon: 'window-sidebar' },
  { category: 'database', label: 'Database', icon: 'database-fill' },
  {
    category: 'software',
    label: 'Logiciel',
    icon: 'window-stack',
  },
  { category: 'other', label: 'Autre' },
];

export const technologies: {
  langage: Record<langageType, Technologie>;
  framework: Record<frameworkType, Technologie>;
  librairie: Record<librairieType, Technologie>;
  IDE: Record<IDEType, Technologie>;
  database: Record<databaseType, Technologie>;
  software: Record<softwareType, Technologie>;
  other: Record<otherType, Technologie>;
  subject: Record<subjectType, Technologie>;
} = {
  langage: {
    HTML: { title: 'HTML', icon: 'filetype-html' },
    CSS: { title: 'CSS', icon: 'filetype-css' },
    SCSS: { title: 'SCSS', icon: 'filetype-scss' },
    PHP: { title: 'PHP', icon: 'filetype-php' },
    JavaScript: { title: 'JavaScript', icon: 'javascript' },
    TypeScript: { title: 'TypeScript', icon: 'typescript' },
    Python: { title: 'Python', icon: 'filetype-py' },
    Java: { title: 'Java', icon: 'filetype-java' },
    SQL: { title: 'SQL', icon: 'database' },
    CPP: { title: 'C++' },
    Dart: { title: 'Dart' },
    Processing: { title: 'Processing' },
    XML: { title: 'XML', icon: 'filetype-xml' },
  },

  framework: {
    CakePHP: { title: 'CakePHP', icon: 'stack' },
    Flutter: { title: 'Flutter', icon: 'phone' },
    Symfony: { title: 'Symfony', icon: 'braces' },
    Angular: { title: 'Angular', icon: 'hexagon' },
    React: { title: 'React', icon: 'circle' },
    VueJs: { title: 'Vue.js', icon: 'triangle' },
    NextJs: { title: 'Next.js', icon: 'forward' },
    Bootstrap: { title: 'Bootstrap', icon: 'bootstrap' },
    TailwindCSS: { title: 'Tailwind CSS', icon: 'palette2' },
    Express: { title: 'Express', icon: 'server' },
  },

  librairie: {
    ThreeJs: { title: 'Three.js', icon: 'triangle' },
    PrimeVue: { title: 'PrimeVue', icon: 'grid-1x2' },
    Sequelize: { title: 'Sequelize', icon: 'database' },
  },

  IDE: {
    VSCode: { title: 'Visual Studio Code', icon: 'code-square' },
    IntelliJ: { title: 'IntelliJ IDEA' },
    AndroidStudio: { title: 'Android Studio', icon: 'android2' },
    PHPStorm: { title: 'PHP Storm' },
    QtCreator: { title: 'Qt Creator' },
    ArduinoIDE: { title: 'Arduino IDE', icon: 'cpu' },
    Spyder: { title: 'Spyder', icon: 'bug' },
  },

  software: {
    Canva: { title: 'Canva', icon: 'palette' },
    Inkscape: { title: 'Inkscape', icon: 'pen' },
    Notion: { title: 'Notion', icon: 'journal-text' },
    Trello: { title: 'Trello', icon: 'trello' },
    Jira: { title: 'Jira', icon: 'kanban' },
  },

  database: {
    MySQL: { title: 'MySQL Workbench', icon: 'database' },
    SQLite: { title: 'SQLite', icon: 'database-fill' },
    MariaDB: { title: 'MariaDB', icon: 'database-fill' },
    Neo4j: { title: 'Neo4j', icon: 'diagram-3' },
    MongoDB: { title: 'MongoDB', icon: 'database' },
  },

  other: {
    GitHub: { title: 'GitHub', icon: 'github' },
    GitLab: { title: 'GitLab', icon: 'git' },
    Docker: { title: 'Docker', icon: 'box-seam' },
    Firebase: { title: 'Firebase', icon: 'fire' },
    Postman: { title: 'Postman', icon: 'send' },
    Bruno: { title: 'Bruno', icon: 'send-fill' },
    phpMyAdmin: { title: 'phpMyAdmin', icon: 'database' },
    Navicat: { title: 'Navicat', icon: 'table' },
    Wamp: { title: 'Wamp', icon: 'server' },
    Bitvise: { title: 'Bitvise', icon: 'cloudy-fill' },
    Mailhog: { title: 'Mailhog', icon: 'envelope' },
    MQTT: { title: 'MQTT', icon: 'wifi' },
    Fog: { title: 'Fog Project', icon: 'cloud' },
    Swagger: { title: 'Swagger', icon: 'braces' },
  },

  subject: {
    Programmation: { title: 'Programmation', icon: 'code-slash' },
    Web: { title: 'Développement web', icon: 'globe' },
    Mobile: { title: 'Développement mobile', icon: 'phone' },
  },
};

export type LangageKey = keyof typeof technologies.langage;
export type FrameworkKey = keyof typeof technologies.framework;
export type LibrairieKey = keyof typeof technologies.librairie;
export type IDEKey = keyof typeof technologies.IDE;
export type databaseKey = keyof typeof technologies.database;
export type SoftwareKey = keyof typeof technologies.software;
export type OtherKey = keyof typeof technologies.other;
export type SubjectKey = keyof typeof technologies.subject;
