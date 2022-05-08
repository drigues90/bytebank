import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  // @Output responsavel por repassar os dados para quem o invocou
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor() {}

  ngOnInit(): void {}

  transferir() {
    console.log('nova transferencia ...');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    // retorna os dados para quem chamou
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = null ;
    this.destino = null ;
  }
}
