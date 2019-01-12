import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSearchPage } from './contact-search.page';

describe('ContactSearchPage', () => {
  let component: ContactSearchPage;
  let fixture: ComponentFixture<ContactSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
