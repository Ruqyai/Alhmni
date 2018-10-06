import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorInfoPage } from './investor-info.page';

describe('InvestorInfoPage', () => {
  let component: InvestorInfoPage;
  let fixture: ComponentFixture<InvestorInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
