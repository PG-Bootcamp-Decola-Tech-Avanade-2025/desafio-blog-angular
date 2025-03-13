import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BigQuoteComponent } from "./components/big-quote/big-quote.component";
import { BooksSectionComponent } from "./components/books-section/books-section.component";
import { BigBookEntryComponent } from "./components/big-book-entry/big-book-entry.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BigQuoteComponent, BooksSectionComponent, BigBookEntryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog_angular';
}
