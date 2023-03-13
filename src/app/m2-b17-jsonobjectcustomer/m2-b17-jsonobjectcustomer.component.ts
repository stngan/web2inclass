import { Component } from '@angular/core';

@Component({
  selector: 'app-m2-b17-jsonobjectcustomer',
  // templateUrl: './m2-b17-jsonobjectcustomer.component.html',
  template: `
    <h3>Bài 17- Json Object Model – Customer – Service</h3>
    <div style="display: flex;">
      <img src="{{customer.Image}}" height="150px" />
      <div>
        <p>Id: {{ customer.Id }}</p>
        <p>Name: {{customer.Name}} </p>
        <p>Email: {{customer.Email}} </p>
        <p>Age: {{ getAge() }} </p>

      </div>
    </div>
  `,
  styleUrls: ['./m2-b17-jsonobjectcustomer.component.css'],
})
export class M2B17JsonobjectcustomerComponent {
  customer = {
    Id: 'Cus123',
    Name: 'Obama',
    Email: 'obama@gmail.com',
    Dateofbirth: 1961,
    Image: 'https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg',
  };

  currentYear:number = new Date().getFullYear();

  getAge() {
    return this.currentYear -  this.customer.Dateofbirth
  }
}
