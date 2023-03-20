import { Component } from '@angular/core';
import { DongABankServiceService } from '../dong-abank-service.service';


@Component({
  selector: 'app-dong-abank',
  templateUrl: './dong-abank.component.html',
  styleUrls: ['./dong-abank.component.css']
})
export class DongAbankComponent {
  data:any;
  data2:any;

  errMessage: string = '';

  constructor(_service:DongABankServiceService) {
    _service.getDongABankData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

  }
}
