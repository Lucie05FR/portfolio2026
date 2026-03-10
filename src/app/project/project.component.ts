// import { Component, Input } from '@angular/core';
// import { ProjectModel } from '../models/project.model';

// @Component({
//   selector: 'app-project',
//   templateUrl: './project.component.html',
//   styleUrl: './project.component.scss',
// })
// export class ProjectComponent {
//   @Input() project!: ProjectModel;
//   haveImages: boolean = false;

//   constructor() {
//     if (this.project !== undefined)
//       this.haveImages = this.project.pictures.length > 0;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  project?: ProjectModel;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = this.projectService.getProjectByOrder(+id);
    }
  }
}
