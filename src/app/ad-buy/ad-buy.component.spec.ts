import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBuyComponent } from './ad-buy.component';

describe('AdBuyComponent', () => {
  let component: AdBuyComponent;
  let fixture: ComponentFixture<AdBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
