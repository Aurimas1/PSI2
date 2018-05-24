import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

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

  count: number;
  private have: number;

  get probability(): number {
    const k = 5 / this.count;
    return k > 1 ? 100 : k * 100;
  }

  constructor(private service: AdService, private router: Router, private toast: ToastsManager) {
    service.count$.subscribe(x => this.count = x);
    service.have$.subscribe(x => {
      if (x)
        this.have = x;
    });
  }

  ngOnInit() {
  }

  buyAd() {
    if (confirm(`Paysera fake, ar pavyko sumokėti ${this.selectedOption}`)) {
      const count = this.options.find(x => x.cost === this.selectedOption).count;
      if (this.have == null || this.have === 0) {
        this.service.add(count)
          .then(() => this.router.navigate(['']));
      } else {
        if (confirm('Jūs jau esate pirmenybės sąraše. Ar tikrai norite užsisakyti papildomų peržiūrų?')) {
          this.service.add(this.have + count)
            .then(() => this.router.navigate(['']));
        }
      }

    } else {
      this.toast.error('Apmokėjimas atmestas. Reklamos užsakymas nepavyko');
      this.router.navigate(['']);
    }
  }

}
