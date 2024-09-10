import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateDropdownComponent } from './estimate-dropdown.component';

describe('EstimateDropdownComponent', () => {
  let component: EstimateDropdownComponent;
  let fixture: ComponentFixture<EstimateDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimateDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
