import { Component, HostListener } from '@angular/core';
import { ProjectService } from './services/project.service';
import { TechnologieCategory, technologies } from './models/technologies.model';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  constructor(
    private router: Router,
    public projectService: ProjectService,
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  getTechno(category: TechnologieCategory, key: string) {
    return (
      (technologies[category] as Record<string, any>)[key] ?? { title: key }
    );
  }

  isProjectsActive(): boolean {
    return (
      this.router.url.startsWith('/projects') ||
      this.router.url.startsWith('/project')
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
