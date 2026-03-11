import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent,
    ErrorComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
