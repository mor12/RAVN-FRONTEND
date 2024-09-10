import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent {
  @Input() isActive: boolean = false;
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() navigateTo: string = '';

  constructor(private routeService: RouteService) {}

  navigate() {
    this.routeService.navigate(this.navigateTo);
  }
}
