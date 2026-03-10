export const langages = [
  'Html',
  'CSS',
  'SCSS',
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
] as const;
export type langageType = (typeof langages)[number];

export const frameworks = [
  'CakePHP',
  'Flutter',
  'Symfony',
  'Angular',
  'React',
  'Vue.js',
  'Next.js',
] as const;
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
] as const;
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
  'Jira',
] as const;

export type otherType = (typeof other)[number];

export const subjects = [
  'Programmation',
  'Développement web',
  'Développement mobile',
] as const;
export type subjectType = (typeof subjects)[number];

export const environnements = ['Windows', 'Linux'] as const;
export type environnementType = (typeof environnements)[number];
