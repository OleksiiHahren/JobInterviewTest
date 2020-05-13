import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {
  @Input() cellData: string;
  @ViewChild('newValue') newValue: ElementRef;
  @Output() changedValueEmit: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  editModeToggle(): void {
    this.editMode = !this.editMode;
  }

  setNewValue(): void {
    const newData = this.newValue.nativeElement.value;
    console.log(newData);
    this.changedValueEmit.emit(newData);
    this.editModeToggle();
  }
}
