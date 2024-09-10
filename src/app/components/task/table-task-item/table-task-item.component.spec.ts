import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTaskItemComponent } from './table-task-item.component';

describe('TableTaskItemComponent', () => {
  let component: TableTaskItemComponent;
  let fixture: ComponentFixture<TableTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTaskItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
