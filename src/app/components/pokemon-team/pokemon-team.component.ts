import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [PokemonFormComponent, PokemonListComponent, LoadingComponent],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.scss'
})
export class PokemonTeamComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;

  constructor() {
    console.log('constructor!');
  }

  ngOnInit(): void {
    console.log('oninit!');
    setTimeout(() => {
      this.pokemonList = [
        { name: 'charmander', type: 'fire', attack: 'ember', level: 5 },
        { name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
        { name: 'squirtle', type: 'water', attack: 'water gun', level: 5 }
      ];
    }, 2000);
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
