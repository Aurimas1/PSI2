import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-buy',
  templateUrl: './ad-buy.component.html',
  styleUrls: ['./ad-buy.component.css']
})
export class AdBuyComponent implements OnInit {

  selectedOption: number;

  options: {cost: number, count: number }[] = [
    { cost: 10, count: 100 },
    { cost: 18, count: 200 },
    { cost: 42, count: 500 },
    { cost: 75, count: 1000 },
    { cost: 120, count: 2000 },
    { cost: 240, count: 5000 }
  ];

  orderCount = 15;

  get probability(): number {
    const k = 5 / this.orderCount;
    return k > 1 ? 100 : k * 100;
  }

  constructor() { }

  ngOnInit() {
  }

}
