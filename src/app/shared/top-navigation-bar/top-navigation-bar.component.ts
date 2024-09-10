import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-top-navigation-bar',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './top-navigation-bar.component.html',
  styleUrl: './top-navigation-bar.component.scss',
})
export class TopNavigationBarComponent {}
