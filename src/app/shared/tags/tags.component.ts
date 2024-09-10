import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  @Input() type?: 'neutral' | 'primary' | 'secondary' | 'tertiary' = 'neutral';
  mode?: 'normal' | 'outline' = 'normal';
}
