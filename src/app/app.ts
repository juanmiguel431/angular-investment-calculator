import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { CalculateInvestmentResultsProps } from '../models';
import { calculateInvestmentResults } from '../investment-results';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('investment-calculator');

  protected onUserInputSubmit(event: CalculateInvestmentResultsProps) {
    const investmentResults = calculateInvestmentResults(event);
    console.log(investmentResults);
  }
}
