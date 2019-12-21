import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public _product: ProductService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log(params['entry']);
        this._product.searchProduct(params['entry']);
      });
  }
}
