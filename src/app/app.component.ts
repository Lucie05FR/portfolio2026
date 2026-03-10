import { Component, HostListener } from '@angular/core';
import { ProjectService } from './services/project.service';

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

  isArray(element: any): boolean {
    return Array.isArray(element);
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
