import { Component } from '@angular/core';
import { PruebaService } from './../prueba.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  txt:any;
  constructor(public pruebaService: PruebaService) {
    this.pruebaService.prueba()
        .then(data => {
          this.txt = data;
          console.log(this.txt);
        });
  }
}
