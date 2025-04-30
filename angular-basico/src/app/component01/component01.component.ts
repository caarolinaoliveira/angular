import { Component } from '@angular/core';

@Component({
  selector: 'app-component01',
  imports: [],
  templateUrl: './component01.component.html',
  styleUrl: './component01.component.css'
})
export class Component01Component {
// Variables
  nome:string = "Carol";
  idade:number = 25;
  profissao:string = "Desenvolvedora"
}
