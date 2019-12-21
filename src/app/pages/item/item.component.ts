import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductDescription } from 'src/app/interfaces/product_desc.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductDescription;
  id: string; 

  constructor(private route: ActivatedRoute,
    public productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.productService.getProduct(params['id'])
          .subscribe((product: ProductDescription) => {
            this.product = product;
            this.id = params['id'];
          });
      }
    );
  }
}
