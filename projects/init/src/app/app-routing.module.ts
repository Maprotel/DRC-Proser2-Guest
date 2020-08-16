import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "shared/guards";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ByeComponent } from "./home/bye/bye.component";

import { RedirectModule } from "shared/modules/redirect/redirect.module";

import { ViewSharedModule } from "projects/view/src/app/app.module";

const routes: Routes = [
  { path: "", redirectTo: "init/home", pathMatch: "full" },
  { path: "init/home", component: HomeComponent },
  { path: "init/bye", component: ByeComponent },

  {
    path: "redirect",
    loadChildren: () =>
      import("shared/modules/redirect/redirect.module").then(
        m => m.RedirectModule
      )
  },

  {
    path: "init/layout",
    loadChildren: () =>
      import("./layout/layout.module").then(m => m.LayoutModule)
  },

  // NAVIGATE TO NOT FOUND PAGE
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  // declarations: [AccessdeniedComponent, NotfoundComponent, ErrorComponent],
  imports: [
    RouterModule.forRoot(routes),
    RedirectModule,

    ViewSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
