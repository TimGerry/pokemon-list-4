import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-store',
  templateUrl: './pokemon-store.component.html',
  styleUrl: './pokemon-store.component.scss'
})
export class PokemonStoreComponent {
  today = new Date();
}
