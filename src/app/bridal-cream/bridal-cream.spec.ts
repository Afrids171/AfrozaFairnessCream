import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalCream } from './bridal-cream';

describe('BridalCream', () => {
  let component: BridalCream;
  let fixture: ComponentFixture<BridalCream>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridalCream]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridalCream);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
