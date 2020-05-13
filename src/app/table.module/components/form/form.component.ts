import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HeaderNames} from '../../../header.const';
import {FormControl, FormGroup} from '@angular/forms';
import {TableDataInterface} from '../../../table-data.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  readonly keysForInputs = HeaderNames;
  formGroup: FormGroup;
  @Output() submitFormEmit: EventEmitter<TableDataInterface> = new EventEmitter<TableDataInterface>();

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(close?) {
    if (close) {
      this.submitFormEmit.emit(null);
    }
    this.submitFormEmit.emit(this.formGroup.value);
  }

  initForm(): void {
    const pureFormsValues = {} as TableDataInterface;
    this.keysForInputs.forEach(el => {
      pureFormsValues[el] = new FormControl(null);
    });
    this.formGroup = new FormGroup({
      ...pureFormsValues
    });
  }

}
