import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelect1Component } from './multi-select1.component';

describe('MultiSelect1Component', () => {
  let component: MultiSelect1Component;
  let fixture: ComponentFixture<MultiSelect1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelect1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelect1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
