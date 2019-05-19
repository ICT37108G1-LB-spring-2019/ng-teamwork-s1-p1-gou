import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PhoneService } from "src/app/services/phone.service";
import { IPhone } from "src/app/models/phone";

@Component({
  selector: "app-phone-form",
  templateUrl: "./phone-form.component.html"
})
export class PhoneFormComponent implements OnInit {
  @Output() phone: EventEmitter<IPhone> = new EventEmitter<IPhone>();

  @Input() editPhone: IPhone;

  phoneForm: FormGroup;
  features: string[];
  isValid: boolean = true;

  constructor(private f: FormBuilder, private phoneService: PhoneService) {
    this.phoneForm = f.group({
      info: ["", Validators.required],
      imageUrl: ["", Validators.required],
      features: ["", Validators.required]
    });
  }

  submitForm(form: FormGroup) {
    this.isValid = form.valid;

    if (form.valid) {
      const { info, imageUrl, features } = form.controls;

      this.phone.emit({
        info: info.value,
        imageUrl: imageUrl.value,
        features: features.value
      });

      this.isValid = true;
    }
  }

  ngOnInit() {
    this.phoneService.getFeatures().subscribe(val => {
      this.features = val;
    });

    if (this.editPhone) {
      let keys = Object.keys(this.editPhone);

      keys.forEach(key => {
        let control = this.phoneForm.controls[key];

        if (control) {
          control.setValue(this.editPhone[key]);
        }
      });
    }
  }
}
