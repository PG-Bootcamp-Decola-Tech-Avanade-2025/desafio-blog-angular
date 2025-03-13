export class Book {
  title: string;
  description: string;
  author: string;
  cover_uri: string;
  rating?: number;

  constructor(
    title: string,
    description: string,
    author: string,
    cover_uri: string,
    rating?: number
  ) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.cover_uri = cover_uri;
    this.rating = rating;
  }
}
