import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rot14Component } from './rot14.component';

describe('Rot14Component', () => {
  let component: Rot14Component;
  let fixture: ComponentFixture<Rot14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rot14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rot14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
