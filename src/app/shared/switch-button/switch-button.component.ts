import { AsyncPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-switch-button',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './switch-button.component.html',
  styleUrl: './switch-button.component.scss',
})
export class SwitchButtonComponent {
  path$: Subject<string>;

  constructor(private routeService: RouteService) {
    this.path$ = this.routeService.currentPath;
  }

  navigate(url: string): void {
    this.routeService.navigate(url);
  }
}
