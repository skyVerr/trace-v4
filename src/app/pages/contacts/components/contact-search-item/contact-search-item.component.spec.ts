import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSearchItemComponent } from './contact-search-item.component';

describe('ContactSearchItemComponent', () => {
  let component: ContactSearchItemComponent;
  let fixture: ComponentFixture<ContactSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
