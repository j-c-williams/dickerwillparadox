import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoComponent } from './auto.component';

describe('AutoComponent', () => {
  let component: AutoComponent;
  let fixture: ComponentFixture<AutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
