import {Component, OnInit} from '@angular/core';
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'htpp://lorempixel.com/400/200/nature';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string='Angular';
  valorInicial = 15;


  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
  this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento:any){
    console.log(evento.novoValor)
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
