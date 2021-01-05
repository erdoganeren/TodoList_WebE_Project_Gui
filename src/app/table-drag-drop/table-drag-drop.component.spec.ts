import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDragDropComponent } from './table-drag-drop.component';

describe('TableDragDropComponent', () => {
  let component: TableDragDropComponent;
  let fixture: ComponentFixture<TableDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
