import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-base';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  @Input() forms!: FormBase<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.forms.key].valid;
  }

}
