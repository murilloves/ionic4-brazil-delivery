import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandDetailPage } from './demand-detail.page';

describe('DemandDetailPage', () => {
  let component: DemandDetailPage;
  let fixture: ComponentFixture<DemandDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
