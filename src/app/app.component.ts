import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BigQuoteComponent } from "./components/big-quote/big-quote.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BigQuoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog_angular';
}
