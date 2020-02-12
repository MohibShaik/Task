import { Product } from './../shared/models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../shared/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: Product;
  currencyState: any = '';
  prices: any;
  currency: any;
  rates: any;
  somevar: any;

  currencyValues: any[];
  multipler: number;
  resultValue: number;

  constructor(private ProductService: ProductListService) { }

  ngOnInit() {
    this.getAllCurrencyExchanges();
    this.getProductList();
    if (localStorage.getItem('currencyState')) {
      this.currencyState = localStorage.getItem('currencyState');
    } else{
      this.currencyState = 'INR';
    }
  }

  public getProductList() {
    this.ProductService.getProductsList().subscribe((res) => {
      this.data = res;

    });
  }


  public CurrencyValue($event) {
    this.currencyState = $event.target.value;
    localStorage.setItem("currencyState", this.currencyState);
  }

  public getAllCurrencyExchanges() {
    this.ProductService.getCurrency().subscribe((res) => {
      if (res) {
        this.currencyValues = res['rates'];
      }
    });
  }

}
