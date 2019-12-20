import { Component } from '@angular/core';
import { PageService } from './services/page.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public pageService: PageService,
    public productService: ProductService) { }

}
