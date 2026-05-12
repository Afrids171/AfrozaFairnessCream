import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soap } from './soap';

describe('Soap', () => {
  let component: Soap;
  let fixture: ComponentFixture<Soap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Soap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
