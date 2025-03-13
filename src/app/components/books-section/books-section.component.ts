import { Component, inject } from '@angular/core';
import { FakeBooksService } from '../../services/fake-books.service';
import { BigBookEntryComponent } from '../big-book-entry/big-book-entry.component';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-books-section',
  imports: [
    BigBookEntryComponent,
    SlicePipe
  ],
  templateUrl: './books-section.component.html',
  styleUrl: './books-section.component.css'
})
export class BooksSectionComponent {
  booksService = inject(FakeBooksService)
}
