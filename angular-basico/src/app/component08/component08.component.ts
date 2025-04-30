import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  imports: [],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.css',
})
export class Component08Component {
  // variável de média
  media: number = 8;
  //vetor de nomes
  nomes: string[] = ['Lucas', 'Ana', 'João', 'Maria', 'Pedro'];
  //linguagem
  linguagem: string = 'JavaScript';
}
