import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarPreviewComponent } from './guitar-preview.component';

describe('GuitarPreviewComponent', () => {
  let component: GuitarPreviewComponent;
  let fixture: ComponentFixture<GuitarPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
