import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PhoneService } from "src/app/services/phone.service";
import { IPhone } from "src/app/models/phone";
import { tap, delay } from "rxjs/operators";

@Component({
  selector: "app-phones-by-id",
  templateUrl: "./phones-by-id.component.html"
})
export class PhonesByIdComponent implements OnInit {
  postId: number;
  phone: IPhone;
  loading: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private phoneService: PhoneService,
    private route: Router
  ) {}

  ngOnInit() {
    this.postId = +this.router.snapshot.paramMap.get("id");

    if (!Number.isNaN(this.postId)) {
      this.phoneService
        .getPhoneById(this.postId)
        .pipe(
          tap(() => (this.loading = true)),
          delay(1000)
        )
        .subscribe(
          val => {
            this.phone = val;
            this.loading = false;
          },
          err => {
            this.loading = false;
          },
          () => (this.loading = false)
        );
    } else {
      return this.route.navigateByUrl("404");
    }
  }
}
