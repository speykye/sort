import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-base';
import { FormControlService } from '../form-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormControlService]
})
export class FormComponent implements OnInit {
  @Input() forms: FormBase<string>[] | null = [];
  @Input() btnName!: string;
  @Output() btnEvent: EventEmitter<any> = new EventEmitter();
  public form!: FormGroup;

  constructor(private fcs: FormControlService) { }

  onSubmit() {
    this.btnEvent.emit(this.form.getRawValue());
  }

  ngOnInit(): void {
    this.form = this.fcs.toFormGroup(this.forms as FormBase<string>[]);
  }

}
