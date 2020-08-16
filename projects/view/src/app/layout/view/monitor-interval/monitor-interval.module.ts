import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
registerLocaleData(localeEs, "es");

import { LOCALE_ID } from "@angular/core";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Vendor

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Local

import { MonitorIntervalRoutingModule } from "./monitor-interval-routing.module";
import { MonitorIntervalComponent } from "./monitor-interval.component";
import { MonitorIntervalListComponent } from "./monitor-interval-list/monitor-interval-list.component";
import { MonitorIntervalHeaderComponent } from "./monitor-interval-header/monitor-interval-header.component";
import { MonitorIntervalSelectorComponent } from "./monitor-interval-selector/monitor-interval-selector.component";

@NgModule({
  declarations: [
    MonitorIntervalComponent,
    MonitorIntervalListComponent,
    MonitorIntervalHeaderComponent,
    MonitorIntervalSelectorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    FontAwesomeModule,
    MonitorIntervalRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
})
export class MonitorIntervalModule {}
