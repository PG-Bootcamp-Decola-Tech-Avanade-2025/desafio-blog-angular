import { Component, inject, input, InputSignal } from '@angular/core';
import { Book } from '../../models/book';
import { FakeBooksService } from '../../services/fake-books.service';

@Component({
  selector: 'app-big-book-entry',
  imports: [],
  templateUrl: './big-book-entry.component.html',
  styleUrl: './big-book-entry.component.css'
})
export class BigBookEntryComponent {
  book: InputSignal<Book> = input(inject(FakeBooksService).getAll()[3]); // Placeholder

  getBookRatingString() :string {
    let rating = this.book()?.rating;

    if (rating == undefined) {
      return "";
    }

    let ratingString: string = "";

    for (let i = 0; i < 5; i++) {
      let char = i < rating ? "★" : "☆";
      ratingString += char;
    }

    return ratingString;
  }
}
