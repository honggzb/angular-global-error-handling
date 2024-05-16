import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingDialogComponent } from './loading-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingDialogService {
  private opened = false;
  private dialogRef!: MatDialogRef<LoadingDialogComponent>;

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    if(!this.opened) {
      this.dialogRef = this.dialog.open(LoadingDialogComponent, { 
        data: undefined,
        maxHeight: '100%',
        width: '500px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true,
      });
    }
    this.dialogRef.afterClosed().subscribe(() => {
      this.opened = false;
    })
  }

  hideDialog(): void {
    this.dialogRef.close();
  }
}
