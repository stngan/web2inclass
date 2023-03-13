import { Component } from '@angular/core';
import { B18CustomergroupService } from '../services/b18-customergroup.service';

@Component({
  selector: 'app-m2-b18-jsonarraygroupcustomer',
  // templateUrl: './m2-b18-jsonarraygroupcustomer.component.html',
  template: `
    <h3>Bài 18- Json Array Model – Group Customers (*)</h3>
    <div class="row">
      <div class="col-id">ID</div>
      <div class="col-name">Name</div>
      <div class="col-email">Email</div>
      <div class="col-age">Age</div>
      <div class="col-image">#</div>
    </div>

    <div *ngFor="let type of customers">
      <p>
        {{type.CustomerTypeId}} - {{ type.CustomterTypeName}}
      </p>

      <div *ngFor="let detail of type.Customers" class="row">
        <div class="col-id">{{ detail.Id }}</div>
        <div class="col-name">{{ detail.Name }}</div>
        <div class="col-email">{{ detail.Email }}</div>
        <div class="col-age">{{ detail.Age }}</div>
        <img class="col-image" src="{{detail.Image}}" alt="">
      </div>

    </div>
  `,
  styleUrls: ['./m2-b18-jsonarraygroupcustomer.component.css'],
})
export class M2B18JsonarraygroupcustomerComponent {
  customers: any;
  constructor(private _service: B18CustomergroupService) {
    this._service.getCustomer().subscribe({
      next: (data) => {
        this.customers = data;
      },
    });
  }
}
