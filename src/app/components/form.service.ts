import { Injectable } from '@angular/core';
import { DropdownForm } from './form-dropDown';
import { TextboxForm } from './form-textbox';
import { FormBase } from './form-base';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  getQuestion() {
    const formFileds: FormBase<string>[] = [
      new DropdownForm({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { label: 'solid', value: 'Solid' },
          { label: 'great', value: 'Great' },
          { label: 'good', value: 'Good' },
          { label: 'unproven', value: 'Unproven' }
        ],
        order: 3,
        labelSpan: 7,
        controlSpan: 12
      }),
      new TextboxForm({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        labelSpan: 7,
        controlSpan: 12
      }),
      new TextboxForm({
        key: '111',
        label: '密码',
        value: '',
        required: true,
        order: 4,
        labelSpan: 7,
        controlSpan: 12
      }),
      new TextboxForm({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        labelSpan: 7,
        controlSpan: 12
      })
    ];
    return of(formFileds.sort((a, b) => a.order - b.order));
  }
}
