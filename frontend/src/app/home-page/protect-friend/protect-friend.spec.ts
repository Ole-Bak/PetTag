import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectFriend } from './protect-friend';

describe('ProtectFriend', () => {
  let component: ProtectFriend;
  let fixture: ComponentFixture<ProtectFriend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectFriend],
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectFriend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
