import { Component, inject } from '@angular/core';
import { FakeBooksService } from '../../services/fake-books.service';

@Component({
  selector: 'app-books-section',
  imports: [],
  templateUrl: './books-section.component.html',
  styleUrl: './books-section.component.css'
})
export class BooksSectionComponent {
  booksService = inject(FakeBooksService)
}
