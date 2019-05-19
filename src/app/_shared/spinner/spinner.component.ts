import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-spinner",
  template:
    '<div class="spinner-border text-primary text-center" role="status"></div>'
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
