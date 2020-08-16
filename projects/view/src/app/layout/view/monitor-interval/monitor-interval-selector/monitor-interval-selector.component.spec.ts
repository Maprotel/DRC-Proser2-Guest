import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorIntervalSelectorComponent } from './monitor-interval-selector.component';

describe('MonitorIntervalSelectorComponent', () => {
  let component: MonitorIntervalSelectorComponent;
  let fixture: ComponentFixture<MonitorIntervalSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorIntervalSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorIntervalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
