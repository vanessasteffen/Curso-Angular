import {Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 10;
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: any = ElementRef;


  incrementa() {
    this.campoValorInput.nativeElement.value++;//outra forma de incrementar mais avançada
    //this.valor++; forma mais simples de incrementar
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    //this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
