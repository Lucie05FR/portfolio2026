export const langages = [
  'Html',
  'CSS/SCSS',
  'PHP',
  'C++',
  'Java',
  'Processing',
  'Dart',
  'Python',
  'SQL',
  'JavaScript',
  'XML',
  'Neo4j',
  'MongoDB',
  'TypeScript',
];
export type langageType = (typeof langages)[number];

export const frameworks = [
  'CakePHP',
  'Flutter',
  'Symfony',
  'Angular',
  'React',
  'Vue.js',
  'Next.js',
];
export type frameworkType = (typeof frameworks)[number];

export const IDE = [
  'Visual Studio Code',
  'IntelliJ IDEA',
  'MySQL Workbench',
  'Android Studio',
  'Qt Creator',
  'Arduino IDE',
  'Spider',
  'PHP storm',
  'SQLite',
  'Processing IDE',
];
export type IDEType = (typeof IDE)[number];

export const other = [
  'Canva',
  'GitHub',
  'GitLab',
  'Trello',
  'Firebase',
  'Office 365 (Word, Excel,...)',
  'Inskape',
  'Bruno',
  'Postman',
  'phpMyAdmin',
  'MariaDB',
  'Navicat',
  'MQTT',
  'Wamp',
  'Bitvise',
  'Fog Project',
  'Docker',
  'mailhog',
  'Notion',
];

export type otherType = (typeof other)[number];

export const subjects = [
  'Programmation',
  'Développement web',
  'Développement mobile',
];
export type subjectType = (typeof subjects)[number];

export const environnements = ['Windows', 'Linux'];
export type environnementType = (typeof environnements)[number];
