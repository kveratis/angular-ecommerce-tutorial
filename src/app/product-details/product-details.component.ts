import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Product from '../product';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id provided in route.
    if (products.some(product => product.id === productIdFromRoute)) {
      this.product = products.find(product => product.id === productIdFromRoute)!;
    }
  }

}
