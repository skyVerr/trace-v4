import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAddPage } from './group-add.page';

describe('GroupAddPage', () => {
  let component: GroupAddPage;
  let fixture: ComponentFixture<GroupAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
