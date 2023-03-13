import { Component } from '@angular/core';
import { M2B16ProducthttperrorService } from '../services/m2-b16-producthttperror.service';

@Component({
  selector: 'app-m2-b16-product-httpserviceerror',
  templateUrl: './m2-b16-product-httpserviceerror.component.html',
  styleUrls: ['./m2-b16-product-httpserviceerror.component.css'],
})
export class M2B16ProductHttpserviceerrorComponent {
  products: any;
  errMessage: string = '';
  constructor(_service: M2B16ProducthttperrorService) {
    _service.getProductsHandleError().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
