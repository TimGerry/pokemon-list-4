import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { OptionalPipe } from './pipes/optional.pipe';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonStoreComponent } from './components/pokemon-store/pokemon-store.component';
import { PokemonTeamComponent } from './components/pokemon-team/pokemon-team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTeamComponent,
    PokemonStoreComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokémon list';
}
