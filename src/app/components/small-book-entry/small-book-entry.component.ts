import { Component, inject, input, InputSignal } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-small-book-entry',
  imports: [],
  templateUrl: './small-book-entry.component.html',
  styleUrl: './small-book-entry.component.css',
})
export class SmallBookEntryComponent {
  book: InputSignal<Book | undefined> = input();
}
