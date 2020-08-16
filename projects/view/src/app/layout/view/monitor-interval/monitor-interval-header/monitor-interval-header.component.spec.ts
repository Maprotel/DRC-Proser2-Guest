import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorIntervalHeaderComponent } from './monitor-interval-header.component';

describe('MonitorIntervalHeaderComponent', () => {
  let component: MonitorIntervalHeaderComponent;
  let fixture: ComponentFixture<MonitorIntervalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorIntervalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorIntervalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
