import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { CalculateInvestmentResultsProps, CalculateInvestmentResultsReturn } from '../models';
import { calculateInvestmentResults } from '../investment-results';
import { InvestmentResultComponent } from './investment-result/investment-result.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected investment: CalculateInvestmentResultsReturn[] = [];

  protected onUserInputSubmit(event: CalculateInvestmentResultsProps) {
    this.investment = calculateInvestmentResults(event);
  }
}
