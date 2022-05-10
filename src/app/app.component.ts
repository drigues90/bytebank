import { TransferenciaService } from './service/transferencia.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferenciaService : TransferenciaService){
  }

  transferir($event){
    this.transferenciaService.adicionar($event);
  }
}


