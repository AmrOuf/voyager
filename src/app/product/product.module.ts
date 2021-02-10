import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { FiltersComponent } from './filters/filters.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ProductComponent, FiltersComponent, ProductListingComponent, ProductItemComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
