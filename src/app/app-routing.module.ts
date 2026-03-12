import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: ':badPath', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
