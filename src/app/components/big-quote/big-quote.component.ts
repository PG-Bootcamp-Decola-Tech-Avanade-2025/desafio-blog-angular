import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-big-quote',
  imports: [],
  templateUrl: './big-quote.component.html',
  styleUrl: './big-quote.component.css'
})
export class BigQuoteComponent {
  text: InputSignal<string> = input("Quote")
  author: InputSignal<string> = input("Author")
  source: InputSignal<string> = input("Source")
}
