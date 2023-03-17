import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelect2Component } from './multi-select2.component';

describe('MultiSelect2Component', () => {
  let component: MultiSelect2Component;
  let fixture: ComponentFixture<MultiSelect2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelect2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
