import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./_shared/navbar/navbar.component";
import { PhoneService } from "./services/phone.service";
import { AdminModule } from "./admin/admin.module";
import { StoreModule } from "./store/store.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StoreModule,
    HttpClientModule
  ],
  providers: [{ useClass: PhoneService, provide: PhoneService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
