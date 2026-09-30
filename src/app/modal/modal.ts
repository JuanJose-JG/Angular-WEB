import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  imports: [],
  selector: 'app-modal',
  styles: ``,
  templateUrl: './modal.html',
})
export class Modal {
  constructor(
    public matDialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public book: any
  ) {
    this.book
  }
}
