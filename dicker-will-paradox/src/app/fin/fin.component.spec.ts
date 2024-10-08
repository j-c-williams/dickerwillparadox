import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinComponent } from './fin.component';

describe('FinComponent', () => {
  let component: FinComponent;
  let fixture: ComponentFixture<FinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
