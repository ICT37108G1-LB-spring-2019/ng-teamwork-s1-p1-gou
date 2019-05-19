import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PhoneService } from "src/app/services/phone.service";
import { IPhone } from "src/app/models/phone";

@Component({
  selector: "app-edit-phone",
  templateUrl: "./edit-phone.component.html"
})
export class EditPhoneComponent implements OnInit {
  phone: IPhone;
  phoneId: number;
  isValid: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private router: Router
  ) {
    this.phoneId = +this.route.snapshot.paramMap.get("id");
  }

  updatePhone(phone: IPhone) {
    this.phoneService.updatePhone(this.phoneId, phone).subscribe(
      val => {
        this.isValid = true;
        setTimeout(
          () => this.router.navigate(["/store/phones", this.phoneId]),
          1000
        );
      },
      err => {
        this.isValid = false;
      }
    );
  }

  ngOnInit() {
    if (!Number.isNaN(this.phoneId)) {
      this.phoneService.getPhoneById(this.phoneId).subscribe(
        val => {
          this.phone = val;
        },
        err => {
          console.log(err);
        }
      );
    } else {
      return this.router.navigateByUrl("404");
    }
  }
}
