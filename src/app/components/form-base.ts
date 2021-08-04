export class FormBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  labelSpan: number;
  controlSpan: number;
  options: { label: string; value: string; }[];

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    labelSpan?: number;
    controlSpan?: number;
    options?: { label: string, value: string }[];
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.labelSpan = options.labelSpan || 0;
    this.controlSpan = options.controlSpan || 0;
  }
}
