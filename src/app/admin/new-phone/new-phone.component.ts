import { Component, OnInit } from "@angular/core";
import { IPhone } from "src/app/models/phone";
import { PhoneService } from "src/app/services/phone.service";

@Component({
  selector: "app-new-phone",
  templateUrl: "./new-phone.component.html"
})
export class NewPhoneComponent implements OnInit {
  isValid: boolean = false;
  constructor(private phoneService: PhoneService) {}

  addPhone(newPhone: IPhone) {
    this.phoneService.addPhone(newPhone).subscribe(
      val => {
        this.isValid = true;
      },
      err => (this.isValid = false)
    );
  }
  ngOnInit() {}
}
