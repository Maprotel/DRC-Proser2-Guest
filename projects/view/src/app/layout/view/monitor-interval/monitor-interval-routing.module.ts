import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MonitorIntervalComponent } from "./monitor-interval.component";

const routes: Routes = [
  {
    path: "",
    component: MonitorIntervalComponent,
    children: [
      // { path: "", redirectTo: "list" },
      // { path: "list", component: AuditReportListComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorIntervalRoutingModule {}
