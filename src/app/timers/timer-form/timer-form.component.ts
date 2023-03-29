import {Component} from '@angular/core';
import {BuildingComponent, BuildingTier, Options} from '../../shared/types';
import {FormBuilder, Validators} from '@angular/forms';
import {BUILDING_COMPONENT_OPTIONS, BUILDING_TIER_OPTIONS, Y_OPTIONS, X_OPTIONS} from '../../shared/options';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent {
  public form = this.fb.group({
    label: ['', Validators.required],
    x: ['', Validators.required],
    y: ['', Validators.required],
    health: ['', Validators.required],
    buildingTier: [null, Validators.required],
    buildingComponent: [null, Validators.required],
    notes: [''],
  });

  public X_OPTIONS = X_OPTIONS;
  public Y_OPTIONS = Y_OPTIONS;
  public BuildingTier = BuildingTier;
  public BUILDING_COMPONENT_OPTIONS = BUILDING_COMPONENT_OPTIONS;

  constructor(private fb: FormBuilder, private snackbar: MatSnackBar) {
  }

  public onSubmit($event: SubmitEvent): void {
    if (this.form.invalid) {
      this.snackbar.open('Please fill out all required fields', 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      });
      return;
    } else {
      this.snackbar.open('Good job filling out the form', 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      });
    }
  }
}
