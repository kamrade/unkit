import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitNavigationComponent } from './ui-kit-navigation.component';

describe('UiKitNavigationComponent', () => {
  let component: UiKitNavigationComponent;
  let fixture: ComponentFixture<UiKitNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiKitNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
