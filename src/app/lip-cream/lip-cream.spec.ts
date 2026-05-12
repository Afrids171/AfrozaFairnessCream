import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipCream } from './lip-cream';

describe('LipCream', () => {
  let component: LipCream;
  let fixture: ComponentFixture<LipCream>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipCream]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LipCream);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
