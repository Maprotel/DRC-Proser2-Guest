import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorIntervalListComponent } from './monitor-interval-list.component';

describe('MonitorIntervalListComponent', () => {
  let component: MonitorIntervalListComponent;
  let fixture: ComponentFixture<MonitorIntervalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorIntervalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorIntervalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
