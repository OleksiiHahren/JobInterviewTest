import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cellData: string;
  @Output() changedValueEmit: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
   // this.initMethod();
  }

  initMethod() {
    console.log(this.cellData);
    if (this.cellData === null) {
      this.editMode = true;
    }
  }

  editModeToggle(): void {
    this.editMode = !this.editMode;
  }

  setNewValue(changes): void {
    const newData = changes.value;
    this.changedValueEmit.emit(newData);
    this.editModeToggle();
  }
}
