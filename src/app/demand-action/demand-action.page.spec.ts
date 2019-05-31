import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandActionPage } from './demand-action.page';

describe('DemandActionPage', () => {
  let component: DemandActionPage;
  let fixture: ComponentFixture<DemandActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandActionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
