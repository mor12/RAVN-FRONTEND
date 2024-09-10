import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {
  PointEstimate,
  PointEstimateValue,
} from '../../../enums/PointEstimate.enum';

@Component({
  selector: 'app-estimate-dropdown',
  standalone: true,
  imports: [MatMenuModule],
  templateUrl: './estimate-dropdown.component.html',
  styleUrl: './estimate-dropdown.component.scss',
})
export class EstimateDropdownComponent {
  @Input() estimate!: PointEstimateValue;
  @Output() changeEstimate = new EventEmitter<PointEstimate>();

  get estimateList() {
    return Object.entries(this.estimate).map(([key, value]) => ({
      key,
      value,
    }));
  }

  handleClick(point: string) {
    this.changeEstimate.emit(point as PointEstimate);
  }
}
