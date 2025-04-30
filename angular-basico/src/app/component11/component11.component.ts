import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component11',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css',
})
export class Component11Component {
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
    ]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  //Visibilidade dos botões
  btnCadastrar: boolean = true;

  //Array de pessoas
  vetor: Pessoa[] = [];

  //armazenar índice da pessoa selecionada
  indice:number = -1;

  //Método para cadastrar
  cadastrar() {
    // Cadastro no Vetor
    this.vetor.push(this.formulario.value as Pessoa);
    // Limpeza de inputs
    this.formulario.reset();
    // Visualizacao via  console
    console.table(this.vetor);
  }

  //Função de seleção
  selecionar(indice:number){
    //Atribui o índice da pessoa selecionada
    this.indice = indice;
    //Atribui os valores do vetor ao formulário
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
  });

  //Desabilita o botão de cadastrar
  this.btnCadastrar = false;
  }


  //Função de alteração
  alterar(){
    //Altera o vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //Limpa o formulário
    this.formulario.reset();
    //Habilita o botão de cadastrar
    this.btnCadastrar = true;
  }

  //Função de exclusão
  excluir(){
    //Remove o elemento do vetor
    this.vetor.splice(this.indice, 1);
    //Limpa o formulário
    this.formulario.reset();
    //Habilita o botão de cadastrar
    this.btnCadastrar = true;
  }
}
