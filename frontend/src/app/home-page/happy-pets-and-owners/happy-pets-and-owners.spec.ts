import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyPetsAndOwners } from './happy-pets-and-owners';

describe('HappyPetsAndOwners', () => {
  let component: HappyPetsAndOwners;
  let fixture: ComponentFixture<HappyPetsAndOwners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyPetsAndOwners],
    }).compileComponents();

    fixture = TestBed.createComponent(HappyPetsAndOwners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
