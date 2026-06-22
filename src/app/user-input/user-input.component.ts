import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { CalculateInvestmentResultsProps } from '../../models';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  protected initialInvestment: number | undefined;
  protected annualInvestment: number | undefined;
  protected expectedReturn = 5;
  protected duration = 10;

  public onSubmit = output<CalculateInvestmentResultsProps>();

  protected onFormSubmitted() {
    this.onSubmit.emit({
      initialInvestment: this.initialInvestment ?? 0,
      annualInvestment: this.annualInvestment ?? 0,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}
