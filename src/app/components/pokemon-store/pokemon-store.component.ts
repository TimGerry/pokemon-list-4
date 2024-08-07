import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-store',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './pokemon-store.component.html',
  styleUrl: './pokemon-store.component.scss'
})
export class PokemonStoreComponent {
  today = new Date();
}
