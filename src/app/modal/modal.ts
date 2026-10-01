import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThemeService } from '../services/theme-service';

@Component({
  imports: [],
  selector: 'app-modal',
  styles: ``,
  templateUrl: './modal.html',
})
export class Modal {
  themeService = inject(ThemeService);

  constructor(
    public matDialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public book: any
  ) {
    this.book
  }
}
