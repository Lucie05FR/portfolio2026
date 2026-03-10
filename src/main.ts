import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

import { Routes } from '@angular/router';
import { ProjectComponent } from './app/project/project.component';

export const routes: Routes = [
  { path: 'project', component: ProjectComponent },
];
