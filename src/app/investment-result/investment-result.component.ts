import { Component, input, signal } from '@angular/core';
import { CalculateInvestmentResultsReturn } from '../../models';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  public readonly investment = input.required<CalculateInvestmentResultsReturn[]>();
}
