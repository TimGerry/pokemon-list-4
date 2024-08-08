import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { LoadingComponent } from '../loading/loading.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [PokemonFormComponent, PokemonListComponent, LoadingComponent],
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
    this.pokemonService.getAll().subscribe(data => this.pokemonList = data);
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
