import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoosePetTag } from './why-choose-pet-tag';

describe('WhyChoosePetTag', () => {
  let component: WhyChoosePetTag;
  let fixture: ComponentFixture<WhyChoosePetTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChoosePetTag],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyChoosePetTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
