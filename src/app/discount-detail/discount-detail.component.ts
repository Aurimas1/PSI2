import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountService } from '../create-discount/discount.service';
import { Discount } from '../models/discount';

@Component({
  selector: 'app-discount-detail',
  templateUrl: './discount-detail.component.html',
  styleUrls: ['./discount-detail.component.css']
})
export class DiscountDetailComponent implements OnInit {

  discount: Discount;

  constructor(route: ActivatedRoute, private service: DiscountService, private router: Router) {
    route.params.subscribe(params => service.getById(params.id).subscribe(x => this.discount = x));
  }

  ngOnInit() {
  }

  deleteDiscount() {
    this.service.delete(this.discount).then(() => this.router.navigate(['']));
  }

}
