import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { faIdBadge, faClock } from "@fortawesome/free-solid-svg-icons";

import * as moment from "moment";

@Component({
  selector: 'app-view-monitor-interval-header',
  templateUrl: './monitor-interval-header.component.html',
  styleUrls: ['./monitor-interval-header.component.scss']
})
export class MonitorIntervalHeaderComponent implements OnInit {
  @Input() userSelection;
  @Input() selectorVisibleFields;
  @Input() timerConnected;

  weekday;

  // Icon
  faIdBadge = faIdBadge;
  faClock = faClock;

  constructor() {}

  ngOnInit() {
    this.weekday = this.onWeekName(
      moment(this.userSelection.creation_date).weekday()
    );
  }

  onWeekName(number) {
    let result = null;
    if (number == 1) {
      return "Lunes";
    }

    if (number == 2) {
      return "Martes";
    }

    if (number == 3) {
      return "Miércoles";
    }

    if (number == 4) {
      return "Jueves";
    }

    if (number == 5) {
      return "Viernes";
    }

    if (number == 6) {
      return "Sábado";
    }

    if (number == 7) {
      return "Domingo";
    }
    return result;
  }
}