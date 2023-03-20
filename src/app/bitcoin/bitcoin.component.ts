import { Component  } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent {
  data: any; 
  errMessage: string = 'không có dữ liệu';
  constructor(_service:BitcoinService) {
    _service.getBitcoinData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
