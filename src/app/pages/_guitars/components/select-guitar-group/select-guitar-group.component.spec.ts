import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGuitarGroupComponent } from './select-guitar-group.component';

describe('SelectGuitarGroupComponent', () => {
  let component: SelectGuitarGroupComponent;
  let fixture: ComponentFixture<SelectGuitarGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGuitarGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGuitarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
