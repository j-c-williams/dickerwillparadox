import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineteenNinetyFiveComponent } from './nineteen-ninety-five.component';

describe('NineteenNinetyFiveComponent', () => {
  let component: NineteenNinetyFiveComponent;
  let fixture: ComponentFixture<NineteenNinetyFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NineteenNinetyFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NineteenNinetyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
