import { Component } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { RouteService } from '../../services/route.service';
import { Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemComponent, AsyncPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  path$: Subject<string>;

  constructor(private routeService: RouteService) {
    this.path$ = this.routeService.currentPath;
  }
}
