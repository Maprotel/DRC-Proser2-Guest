import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

// Vendor
import * as moment from "moment";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";

import {
  UserSelectionModel,
  UserSelectionVisibleAreasModel,
} from "./../auxiliar/UserSelection.model";

// Custom
import {
  dateToDatePicker,
  objectTimeToTextTime,
  objectDateToTextDate,
  selectorOptionSubtitles,
  selectorLegendSubtitles,
} from "shared/functions";

@Component({
  selector: "app-view-monitor-interval-selector",
  templateUrl: "./monitor-interval-selector.component.html",
  styleUrls: ["./monitor-interval-selector.component.scss"],
})
export class MonitorIntervalSelectorComponent implements OnInit {
  @Output() returnUserSelection: EventEmitter<any> = new EventEmitter();
  @Input() userSelection: UserSelectionModel;

  @Input() selectorVisibleFields: UserSelectionModel;
  @Input() selectorVisibleAreas: UserSelectionVisibleAreasModel;

  selectorForm;
  // selectorForm;

  model: NgbDateStruct;
  date: { year: number; month: number };

  constructor(
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar
  ) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
    console.log("userSelection Selector", this.userSelection);
    console.log("userSelection Selector", this.selectorVisibleFields);
    this.onFillForm();
  }

  // Initialize te form
  onFillForm() {
    this.selectorForm = this.formBuilder.group({
      title: [this.userSelection.title],
      entity_selection: [this.userSelection.entity_selection],
      options: [this.userSelection.options],
      legend: [this.userSelection.legend],
      login: [this.userSelection.login],

      mode: [this.userSelection.mode],
      type: [this.userSelection.type],

      start_date: [this.userSelection.start_date],
      end_date: [this.userSelection.end_date],
      start_time: [this.userSelection.start_time],
      end_time: [this.userSelection.end_time],

      auxiliar: [this.userSelection.auxiliar],
      assignation: [this.userSelection.assignation],

      client: [this.userSelection.client],
      queue: [this.userSelection.queue],
      service: [this.userSelection.service],
      campaign: [this.userSelection.campaign],

      supervisor: [this.userSelection.supervisor],
      agent: [this.userSelection.agent],
      role: [this.userSelection.role],
      schedule: [this.userSelection.schedule],

      status: [this.userSelection.status],

      last_minutes: [this.userSelection.last_minutes],
      interval: [this.userSelection.interval],

      groupBy: [this.userSelection.groupBy],
      orderBy: [this.userSelection.orderBy],
      limitBy: [this.userSelection.limitBy],

      start_time_hour: [this.userSelection.start_time_hour],
      end_time_hour: [this.userSelection.end_time_hour],

      current_date: [dateToDatePicker(moment().format("YYYY-MM-DD"))],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.selectorForm.controls;
  }

  onChange() {
    this.selectorForm.patchValue({
      options: selectorOptionSubtitles(this.selectorForm.value),
    });
    this.selectorForm.patchValue({
      legend: selectorLegendSubtitles(this.selectorForm.value),
    });
  }

  onSubmit() {
    console.log("this.userSelection", this.userSelection);

    this.userSelection = this.selectorForm.value;
    this.returnUserSelection.emit(this.userSelection);
  }
}
