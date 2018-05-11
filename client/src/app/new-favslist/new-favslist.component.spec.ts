/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewFavslistComponent } from './new-favslist.component';

describe('NewFavslistComponent', () => {
  let component: NewFavslistComponent;
  let fixture: ComponentFixture<NewFavslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFavslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFavslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
