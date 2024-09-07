import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuckerComponent } from './zucker.component';

describe('ZuckerComponent', () => {
  let component: ZuckerComponent;
  let fixture: ComponentFixture<ZuckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZuckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZuckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
