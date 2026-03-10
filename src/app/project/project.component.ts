import { Component, Input } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() project!: ProjectModel;
  haveImages: boolean = false;

  constructor() {
    if (this.project !== undefined)
      this.haveImages = this.project.pictures.length > 0;
  }
}
