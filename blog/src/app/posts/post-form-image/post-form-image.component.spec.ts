/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostFormImageComponent } from './post-form-image.component';

describe('PostFormImageComponent', () => {
  let component: PostFormImageComponent;
  let fixture: ComponentFixture<PostFormImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFormImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
