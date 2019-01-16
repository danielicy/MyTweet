import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalzoneComponent } from './personalzone.component';

describe('PersonalzoneComponent', () => {
  let component: PersonalzoneComponent;
  let fixture: ComponentFixture<PersonalzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
