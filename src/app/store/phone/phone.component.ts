import { Component, OnInit, Input } from "@angular/core";
import { IPhone } from "src/app/models/phone";

@Component({
  selector: "app-phone",
  templateUrl: "./phone.component.html"
})
export class PhoneComponent implements OnInit {
  @Input() phone: IPhone;

  constructor() {}

  ngOnInit() {}
}
