import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.scss',
})
export class PokemonTeamComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;

  constructor(private pokemonService: PokemonService) {
    console.log('constructor!');
  }

  ngOnInit(): void {
    console.log('oninit!');
    this.loadData();
  }

  addPokemon(pokemonToAdd: Pokemon) {
    this.pokemonService.add(pokemonToAdd).subscribe(() => this.loadData());
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }

  private loadData() {
    this.pokemonService.getAll().subscribe(data => this.pokemonList = data);
  }
}
