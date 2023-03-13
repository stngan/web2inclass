import { Component } from '@angular/core';
import { M2B15ProductHttpserviceService } from '../services/m2-b15-product-httpservice.service';

@Component({
  selector: 'app-m2-b15-product-httpservice',
  templateUrl: './m2-b15-product-httpservice.component.html',
  styleUrls: ['./m2-b15-product-httpservice.component.css']
})
export class M2B15ProductHTTPserviceComponent {
  products:any;
  constructor(private _service: M2B15ProductHttpserviceService){
  this._service.getProducts().subscribe({
  next:(data)=>{this.products=data}
  })
  }
}
