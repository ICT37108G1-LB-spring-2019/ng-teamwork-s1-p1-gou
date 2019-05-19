import { Component, OnInit } from "@angular/core";
import { PhoneService } from "src/app/services/phone.service";
import { IPhone } from "src/app/models/phone";
import { tap, delay } from "rxjs/operators";

@Component({
  selector: "app-admin-phones",
  templateUrl: "./admin-phones.component.html"
})
export class AdminPhonesComponent implements OnInit {
  phones: IPhone[];
  loading: boolean = true;

  constructor(private phoneService: PhoneService) {}

  deletePhone(id: number) {
    this.phoneService.deletePhone(id).subscribe(
      val => {
        let index = this.phones.findIndex(phone => phone.id === id);

        if (index !== -1) {
          this.phones.splice(index, 1);
        }
      },
      err => {
        console.log(err);
      }
    );

    return false;
  }

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
          console.log(err);
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }
}
