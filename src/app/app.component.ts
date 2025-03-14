import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BigQuoteComponent } from "./components/big-quote/big-quote.component";
import { BooksSectionComponent } from "./components/books-section/books-section.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BigQuoteComponent, BooksSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyReads';
}
