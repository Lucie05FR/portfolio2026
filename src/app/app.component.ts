import { Component, HostListener } from '@angular/core';
import { ProjectService } from './services/project.service';
import { TechnologieCategory, technologies } from './models/technologies.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'RENARD Lucie';
  bubbleX = 0;
  bubbleY = 0;
  isClicked = false;

  constructor(public projectService: ProjectService) {}

  getTechno(category: TechnologieCategory, key: string) {
    return (
      (technologies[category] as Record<string, any>)[key] ?? { title: key }
    );
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.bubbleX = event.clientX;
    this.bubbleY = event.clientY;
  }

  @HostListener('document:click')
  onClick() {
    this.isClicked = true;
    setTimeout(() => (this.isClicked = false), 200);
  }
}
