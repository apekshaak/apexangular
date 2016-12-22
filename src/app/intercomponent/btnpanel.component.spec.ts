/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BtnpanelComponent } from './btnpanel.component';

describe('BtnpanelComponent', () => {
  let component: BtnpanelComponent;
  let fixture: ComponentFixture<BtnpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
