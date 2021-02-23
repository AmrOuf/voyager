import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { FiltersComponent } from './filters/filters.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    ProductComponent,
    FiltersComponent,
    ProductListingComponent,
    ProductItemComponent,
    ProductAddComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, ReactiveFormsModule],
})
export class ProductModule {}
