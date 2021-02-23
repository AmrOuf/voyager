import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  addProductForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.addProductForm = new FormGroup({
      productName: new FormControl(null, Validators.required),
      productPrice: new FormControl(null),
      category: new FormControl(null),
    });
  }

  onAddProductSubmit() {
    console.log(this.addProductForm);
  }
}
