import { Component, OnInit } from "@angular/core";
import { PhoneService } from "src/app/services/phone.service";
import { IPhone } from "src/app/models/phone";
import { tap, delay } from "rxjs/operators";

@Component({
  selector: "app-phone-list",
  templateUrl: "./phone-list.component.html"
})
export class PhoneListComponent implements OnInit {
  phones: IPhone[];
  loading: boolean = false;

  constructor(private phoneService: PhoneService) {}

  ngOnInit() {
    this.phoneService
      .getPhones()
      .pipe(
        tap(() => (this.loading = true)),
        delay(1000)
      )
      .subscribe(
        val => {
          this.phones = val;
          this.loading = false;
        },
        err => {
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }
}
