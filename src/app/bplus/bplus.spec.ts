import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bplus } from './bplus';

describe('Bplus', () => {
  let component: Bplus;
  let fixture: ComponentFixture<Bplus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bplus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bplus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
