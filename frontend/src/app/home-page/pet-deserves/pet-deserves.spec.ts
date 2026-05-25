import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDeserves } from './pet-deserves';

describe('PetDeserves', () => {
  let component: PetDeserves;
  let fixture: ComponentFixture<PetDeserves>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetDeserves],
    }).compileComponents();

    fixture = TestBed.createComponent(PetDeserves);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
