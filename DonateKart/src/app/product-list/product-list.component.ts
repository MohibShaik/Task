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
  }

  public getProductList() {
    this.ProductService.getProductsList().subscribe((res) => {
      this.data = res;

    });
  }


  public CurrencyValue($event) {
    this.currencyState = $event.target.value;
  }

  public getAllCurrencyExchanges() {
    this.ProductService.getCurrency().subscribe((res) => {
      if (res) {
        this.currencyValues = res['rates'];
      }
    });
  }

}
