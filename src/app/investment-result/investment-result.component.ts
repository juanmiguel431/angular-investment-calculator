import { Component, input, signal } from '@angular/core';
import { CalculateInvestmentResultsReturn } from '../../models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  public readonly investment = input.required<CalculateInvestmentResultsReturn[]>();
}
