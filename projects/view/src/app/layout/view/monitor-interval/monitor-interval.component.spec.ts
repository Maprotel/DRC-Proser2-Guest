import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorIntervalComponent } from './monitor-interval.component';

describe('MonitorIntervalComponent', () => {
  let component: MonitorIntervalComponent;
  let fixture: ComponentFixture<MonitorIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
