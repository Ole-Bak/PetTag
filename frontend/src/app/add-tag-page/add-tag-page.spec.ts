import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTagPage } from './add-tag-page';

describe('AddTagPage', () => {
  let component: AddTagPage;
  let fixture: ComponentFixture<AddTagPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTagPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTagPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
