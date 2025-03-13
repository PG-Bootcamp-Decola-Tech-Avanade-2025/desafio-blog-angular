import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class FakeBooksService {
  private books: Book[] = [
    new Book(
      'Warbreaker',
      'Warbreaker, do autor best-seller do New York Times, Brandon Sanderson, conta a  história de duas princesas, Siri e Vivenna, seus papéis inesperados em  um mundo politicamente carregado, e as figuras complexas ao seu redor.',
      'Brandon Sanderson',
      '/warbreaker-cover.png'
    ),
    new Book(
      'The Way of Kings',
      'From #1 New York Times bestselling author Brandon Sanderson, The Way of Kings, Book One of the Stormlight Archive, begins an incredible new saga of epic proportion.',
      'Brandon Sanderson',
      '/wayofkings-cover.jpg',
      5
    ),
    new Book(
      'Words of Radiance',
      'From #1 New York Times bestselling author Brandon Sanderson, Words of Radiance, Book Two of the Stormlight Archive, continues the immersive fantasy epic that The Way of Kings began.',
      'Brandon Sanderson',
      '/wordsofradiance-cover.jpg',
      5
    ),
    new Book(
      'Tress of The Emerald Sea',
      'From #1 New York Times bestselling author Brandon Sanderson  comes a rollicking, riveting tale set in the Cosmere universe—a  standalone adventure perfect for fans of The Princess Bride.',
      'Brandon Sanderson',
      '/tressoftheemeraldsea-cover.jpg',
      4
    ),
  ];

  getAll() {
    return this.books;
  }

  getRated() {
    return this.books.filter((book) => book.rating != undefined);
  }

  getUnrated() {
    return this.books.filter((book) => book.rating == undefined);
  }
}
