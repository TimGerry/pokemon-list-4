import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonTrainingComponent } from './pokemon-training/pokemon-training.component';
import { PokemonTeamComponent } from './pokemon-team/pokemon-team.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonStoreComponent } from './pokemon-store/pokemon-store.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { OptionalPipe } from '../pipes/optional.pipe';
import { PokemonService } from './services/pokemon.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PokemonFormComponent, PokemonTrainingComponent, PokemonTeamComponent, PokemonListComponent, PokemonStoreComponent],
  imports: [
    CommonModule, LoadingComponent, DatePipe, CurrencyPipe, OptionalPipe, RouterModule, ReactiveFormsModule
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
