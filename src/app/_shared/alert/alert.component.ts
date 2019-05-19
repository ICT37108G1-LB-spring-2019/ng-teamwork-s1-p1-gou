import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-alert",
  template: `
    <div class="alert " [ngClass]="'alert-' + type" role="alert">
      {{ message }}
    </div>
  `
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Input() type: string = "danger";

  constructor() {}

  ngOnInit() {}
}
