import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoPage } from './user-info.page';

describe('UserInfoPage', () => {
  let component: UserInfoPage;
  let fixture: ComponentFixture<UserInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
