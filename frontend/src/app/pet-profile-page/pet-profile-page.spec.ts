import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfilePage } from './pet-profile-page';

describe('PetProfilePage', () => {
  let component: PetProfilePage;
  let fixture: ComponentFixture<PetProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetProfilePage],
    }).compileComponents();

    fixture = TestBed.createComponent(PetProfilePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
