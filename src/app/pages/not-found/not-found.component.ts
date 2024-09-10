import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  constructor(private routeService: RouteService) {}

  navigate(): void {
    this.routeService.navigate('/');
  }
}
