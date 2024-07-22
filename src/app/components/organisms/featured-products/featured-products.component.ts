import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  products = [
    {
      name: 'Plant Grow Light',
      price: 29.99,
      image: 'assets/products/grow-light.jpg',
    },
    {
      name: 'Hydroponic System',
      price: 149.99,
      image: 'assets/products/hydroponic-system.jpg',
    },
    {
      name: 'Soil Moisture Sensor',
      price: 19.99,
      image: 'assets/products/soil-moisture-sensor.jpg',
    },
    {
      name: 'Indoor Garden Kit',
      price: 89.99,
      image: 'assets/products/indor-garden-kit.jpg',
    },
  ];

  ngOnInit(): void {}
}
