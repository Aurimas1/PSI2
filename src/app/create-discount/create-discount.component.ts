import { Component, OnInit } from '@angular/core';
import { Discount } from '../models/discount';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';
import { DiscountService } from './discount.service';

@Component({
  selector: 'app-create-discount',
  templateUrl: './create-discount.component.html',
  styleUrls: ['./create-discount.component.css']
})
export class CreateDiscountComponent implements OnInit {

  discount: Discount = new Discount();

  constructor(private toast: ToastsManager, private router: Router, private service: DiscountService) { }

  ngOnInit() {
  }

  createDiscount() {
    if (this.validateFields()) {
      if (this.validateLogic()) {
        this.discount.percentage = +this.discount.percentage;
        if (this.discount.percentage < 5 || this.discount.percentage > 50) {
          if (confirm('Ar teisingai įvedėte nuolaidos dydį?'))
            this.add();
        } else {
          this.add();
        }
      }
    } else {
      this.toast.error('Trūksta informacijos patvirtinimui');
    }
  }

  private add() {
    this.service.add(this.discount)
      .then(() => this.toast.success('Nuolaida sėkmingai sukurta'))
      .then(() => this.router.navigate(['']));
  }

  private validateFields(): boolean {
    const notValid = this.discount.companyName === '' ||
    this.discount.code === '' ||
    this.discount.start == null ||
    this.discount.end == null ||
    (!this.discount.toAll && (this.discount.comment === '' || this.discount.comment == null))  ||
    +this.discount.percentage === 0;
    return !notValid;
  }

  private validateLogic(): boolean {
    const percentage = +this.discount.percentage;
    if (percentage === NaN) {
      this.toast.error('Procentai turi būti skaičius');
      return false;
    } else if (percentage <= 0 || percentage > 100) {
      this.toast.error('Neteisingai įvestas nuolaidos dydis');
      return false;
    }
    const start: Date = this.discount.start as any;
    const end: Date = this.discount.end as any;
    if (end < start) {
      this.toast.error('Data nėra tinkama');
      return false;
    }
    return true;
  }
}
