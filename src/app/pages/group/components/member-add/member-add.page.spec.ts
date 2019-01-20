import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddPage } from './member-add.page';

describe('MemberAddPage', () => {
  let component: MemberAddPage;
  let fixture: ComponentFixture<MemberAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
