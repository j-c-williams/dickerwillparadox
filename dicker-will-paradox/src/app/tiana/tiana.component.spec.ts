import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TianaComponent } from './tiana.component';

describe('TianaComponent', () => {
  let component: TianaComponent;
  let fixture: ComponentFixture<TianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TianaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
