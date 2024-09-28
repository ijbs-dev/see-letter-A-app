import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput: string = '';  // Armazena o input do usuário
  result: number | null = null;  // Armazena o número de vezes que 'A' aparece

  // Função para contar a letra 'A' na string, chamada apenas quando o botão é clicado
  countA(): void {
    if (!this.userInput) {
      this.result = 0;
    } else {
      this.result = (this.userInput.match(/a/gi) || []).length;  // Contar 'a' e 'A'
    }
  }
}
