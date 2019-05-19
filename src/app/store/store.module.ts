import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreComponent } from "./store.component";
import { PhonesByIdComponent } from "./phones-by-id/phones-by-id.component";
import { AppRoutingModule } from "../app-routing.module";
import { PhoneListComponent } from "./phone-list/phone-list.component";
import { PhoneComponent } from "./phone/phone.component";
import { SharedModule } from "../_shared/shared.module";

@NgModule({
  declarations: [
    StoreComponent,
    PhonesByIdComponent,
    PhoneListComponent,
    PhoneComponent
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule]
})
export class StoreModule {}
