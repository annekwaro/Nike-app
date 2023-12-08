import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'], // Corrected property name
})
export class ProductDetailComponent implements OnInit {
  // Added missing colon
  productId?: number;
  product: any; // Replace 'any' with the actual type of your product data
  products: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the product ID from the route parameters
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];

      // Fetch the product details using the productId
      // You can use a service to fetch data from a backend or use a local array
      this.product = this.products.find(
        (p: { id: number | undefined }) => p.id === this.productId
      );
    });
  }
}
