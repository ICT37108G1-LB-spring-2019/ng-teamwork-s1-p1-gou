import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminPhonesComponent } from "./admin-phones/admin-phones.component";
import { EditPhoneComponent } from "./edit-phone/edit-phone.component";
import { NewPhoneComponent } from "./new-phone/new-phone.component";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../_shared/shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PhoneFormComponent } from './phone-form/phone-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminPhonesComponent,
    EditPhoneComponent,
    NewPhoneComponent,
    PhoneFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule {}
