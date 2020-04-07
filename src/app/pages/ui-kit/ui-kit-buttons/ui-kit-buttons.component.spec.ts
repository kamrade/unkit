import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitButtonsComponent } from './ui-kit-buttons.component';

describe('UiKitButtonsComponent', () => {
  let component: UiKitButtonsComponent;
  let fixture: ComponentFixture<UiKitButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiKitButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
