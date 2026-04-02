import { Injectable } from '@angular/core';

export interface Theme {
  name: string;
  light: string;
  primary: string;
  secondary: string;
  dark: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  themes: Theme[] = [
    {
      name: 'Vert',
      light: '#eaf2e1',
      primary: '#bcbd8b',
      secondary: '#717744',
      dark: '#373d20',
    },
    {
      name: 'Sable',
      light: '#fdf6ec',
      primary: '#f7cead',
      secondary: '#a98467',
      dark: '#5c3d2e',
    },
    {
      name: 'Bleu',
      light: '#e1eef2',
      primary: '#8bbcbd',
      secondary: '#447177',
      dark: '#00363a',
    },
    {
      name: 'Violet',
      light: '#f2e1ee',
      primary: '#bd8bbc',
      secondary: '#774471',
      dark: '#3d2037',
    },
    {
      name: 'Rouge',
      light: '#d9cab3',
      primary: '#d69e81',
      secondary: '#90323d',
      dark: '#5e0b15',
    },
    {
      name: 'Nature',
      light: '#eef6ec',
      primary: '#6a994e',
      secondary: '#386641',
      dark: '#1b4332',
    },
    {
      name: 'Nuit',
      light: '#c9d1d9',
      primary: '#6e9db5',
      secondary: '#2d4a5e',
      dark: '#0d1117',
    },
  ];

  currentTheme: Theme = this.themes[0];

  applyTheme(theme: Theme) {
    this.currentTheme = theme;
    const root = document.documentElement;

    root.style.setProperty('--color-light', theme.light);
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-dark', theme.dark);

    // Conversion hex => RGB pour Bootstrap
    const primaryRgb = this.hexToRgb(theme.primary);
    const secondaryRgb = this.hexToRgb(theme.secondary);
    const darkRgb = this.hexToRgb(theme.dark);
    const lightRgb = this.hexToRgb(theme.light);

    root.style.setProperty('--bs-primary', theme.primary);
    root.style.setProperty('--bs-dark', theme.dark);
    root.style.setProperty('--bs-primary-rgb', primaryRgb);
    root.style.setProperty('--bs-secondary-bg', theme.secondary);
    root.style.setProperty('--bs-secondary-rgb', secondaryRgb);
    root.style.setProperty('--bs-body-bg', theme.dark);
    root.style.setProperty('--bs-body-bg-rgb', darkRgb);
    root.style.setProperty('--bs-body-color', theme.light);
    root.style.setProperty('--bs-body-color-rgb', lightRgb);
    root.style.setProperty('--bs-card-bg', theme.dark);
    root.style.setProperty('--bs-border-color', theme.secondary);
    root.style.setProperty('--bs-link-color', theme.primary);
    root.style.setProperty('--bs-link-color-rgb', primaryRgb);

    // Navbar
    root.style.setProperty('--bs-navbar-color', theme.light);
    root.style.setProperty('--bs-navbar-hover-color', theme.primary);
    root.style.setProperty('--bs-navbar-brand-color', theme.light);
    root.style.setProperty('--bs-navbar-active-color', theme.primary);

    // Dropdown
    root.style.setProperty('--bs-dropdown-bg', theme.dark);
    root.style.setProperty('--bs-dropdown-link-color', theme.light);
    root.style.setProperty('--bs-dropdown-link-hover-bg', theme.secondary);
    root.style.setProperty('--bs-dropdown-link-hover-color', theme.light);

    // Boutons
    root.style.setProperty('--bs-btn-color', theme.dark);
    root.style.setProperty('--bs-btn-bg', theme.primary);
    root.style.setProperty('--bs-btn-border-color', theme.primary);

    root.style.setProperty('--bs-dark', theme.dark);
    root.style.setProperty('--bs-dark-rgb', darkRgb);
    root.style.setProperty('--bs-light', theme.light);
    root.style.setProperty('--bs-light-rgb', lightRgb);

    // card et éléments sombres
    root.style.setProperty('--bs-tertiary-bg', theme.dark);
    root.style.setProperty('--bs-secondary-color', theme.light);
    root.style.setProperty('--bs-emphasis-color', theme.light);

    localStorage.setItem('theme', JSON.stringify(theme));
  }

  private hexToRgb(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }

  loadSavedTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) this.applyTheme(JSON.parse(saved));
  }
}
