import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { PhonesByIdComponent } from "./store/phones-by-id/phones-by-id.component";
import { AdminComponent } from "./admin/admin.component";
import { EditPhoneComponent } from "./admin/edit-phone/edit-phone.component";
import { NewPhoneComponent } from "./admin/new-phone/new-phone.component";
import { PhoneListComponent } from "./store/phone-list/phone-list.component";
import { AdminPhonesComponent } from "./admin/admin-phones/admin-phones.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "store/phones", pathMatch: "full" },
  { path: "home", redirectTo: "store/phones", pathMatch: "full" },

  /// Store
  {
    path: "store/phones",
    component: StoreComponent,
    children: [
      {
        path: "",
        component: PhoneListComponent
      },
      {
        path: ":id",
        component: PhonesByIdComponent
      }
    ]
  },

  /// Admin
  {
    path: "admin/phones",
    component: AdminComponent,
    children: [
      { path: "", component: AdminPhonesComponent },
      {
        path: "new",
        component: NewPhoneComponent
      },
      { path: ":id", redirectTo: ":id/edit", pathMatch: "full" },
      {
        path: ":id/edit",
        component: EditPhoneComponent
      }
    ]
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
