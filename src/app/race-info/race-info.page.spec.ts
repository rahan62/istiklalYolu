import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceInfoPage } from './race-info.page';

describe('RaceInfoPage', () => {
  let component: RaceInfoPage;
  let fixture: ComponentFixture<RaceInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
