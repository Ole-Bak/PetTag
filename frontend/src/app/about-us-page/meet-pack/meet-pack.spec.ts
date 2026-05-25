import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetPack } from './meet-pack';

describe('MeetPack', () => {
  let component: MeetPack;
  let fixture: ComponentFixture<MeetPack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetPack],
    }).compileComponents();

    fixture = TestBed.createComponent(MeetPack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
