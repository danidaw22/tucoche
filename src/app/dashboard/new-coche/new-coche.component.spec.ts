/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewCocheComponent } from './new-coche.component';

describe('NewCocheComponent', () => {
  let component: NewCocheComponent;
  let fixture: ComponentFixture<NewCocheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCocheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
