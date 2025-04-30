import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component5',
  imports: [CommonModule],
  templateUrl: './component5.component.html',
  styleUrl: './component5.component.css'
})
export class Component5Component {
    // Vetor de nomes
    nomes: string[] = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
}
