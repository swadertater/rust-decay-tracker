import {Component, Output, EventEmitter} from '@angular/core';
import {BuildingTier} from '../../shared/types';
import {FormBuilder, Validators} from '@angular/forms';
import {Y_OPTIONS, X_OPTIONS} from '../../shared/options';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface TimerFormValue {
  label: string;
  x: string;
  y: string;

  health: number;
  buildingTier: BuildingTier;
  notes: string;

}

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent {
  @Output() formSubmit = new EventEmitter<TimerFormValue>();

  public form = this.fb.group({
    label: ['', Validators.required],
    x: [''],
    y: [''],
    health: [null, Validators.required],
    buildingTier: [null, Validators.required],
    notes: [''],
  });

  public X_OPTIONS = X_OPTIONS;
  public Y_OPTIONS = Y_OPTIONS;
  public BuildingTier = BuildingTier;

  constructor(private fb: FormBuilder, private snackbar: MatSnackBar) {
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      this.snackbar.open('Please fill out all required fields', 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      });
      return;
    } else {
      this.formSubmit.emit(this.form.value as TimerFormValue);
    }
  }
}
