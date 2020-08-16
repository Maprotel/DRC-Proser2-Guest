import { Component, OnInit } from "@angular/core";

// Models
import {
  UserSelectionModel,
  UserSelectionVisibleAreasModel,
} from "./auxiliar/UserSelection.model";

@Component({
  selector: "app-view-monitor-interval",
  templateUrl: "./monitor-interval.component.html",
  styleUrls: ["./monitor-interval.component.scss"],
})
export class MonitorIntervalComponent implements OnInit {
  userSelection: UserSelectionModel = new UserSelectionModel();
  selectorVisibleFields: UserSelectionModel = new UserSelectionModel(
    "visibility"
  );
  selectorVisibleAreas: UserSelectionVisibleAreasModel = new UserSelectionVisibleAreasModel();

  constructor() {
    this.onUserSelectionInit();
  }

  ngOnInit(): void {}

  onUserSelectionInit() {
    this.userSelection = new UserSelectionModel();
    this.userSelection.title = "Llamadas entrantes por intervalo";
  }
}
