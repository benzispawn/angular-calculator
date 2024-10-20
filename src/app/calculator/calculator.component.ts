import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  currentInput: string = '';
  previousInput: string = '';
  operation: string | undefined;

  appendNumber(number: number) {
    this.currentInput += number.toString();
  }

  chooseOperation(operation: string) {
    if (this.currentInput === '') return;
    if (this.previousInput !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  compute() {
    let result: number;
    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    this.currentInput = result.toString();
    this.operation = undefined;
    this.previousInput = '';
  }

  clear() {
    this.currentInput = '';
    this.previousInput = '';
    this.operation = undefined;
  }
}
