import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KastamonuPage } from './kastamonu.page';

describe('KastamonuPage', () => {
  let component: KastamonuPage;
  let fixture: ComponentFixture<KastamonuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KastamonuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KastamonuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
