import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FetchingProductsService } from 'src/app/core/fetching-products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  constructor(private products: FetchingProductsService) {}

  ngOnInit(): void {}
}
