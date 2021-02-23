import { Component, OnInit } from '@angular/core';
import { FetchingProductsService } from 'src/app/core/fetching-products.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  // products = [
  //   {
  //     id: 1,
  //     name: 'Inception',
  //   },
  //   {
  //     id: 2,
  //     name: 'The Intern',
  //   },
  //   {
  //     id: 3,
  //     name: 'Before Sunrise',
  //   },
  // ];
  products: { id: string; name: string }[] = [];

  constructor(private fetchedProducts: FetchingProductsService) {}

  ngOnInit(): void {}
}
