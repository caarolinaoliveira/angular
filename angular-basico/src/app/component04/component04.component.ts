import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  imports: [CommonModule],
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.css',
})
export class Component04Component {
  //variável para exibir ou ocultar o componente
  exibir: boolean = true;
  //função para exibir ou ocultar o componente
  acao(){
    if(this.exibir ===true){
      this.exibir = false;
  }else{
      this.exibir = true;
    }
  }
}
