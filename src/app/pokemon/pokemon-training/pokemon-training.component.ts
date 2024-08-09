import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Observable, Subscription, switchMap, tap } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-training',
  templateUrl: './pokemon-training.component.html',
  styleUrl: './pokemon-training.component.scss'
})
export class PokemonTrainingComponent implements OnDestroy {
  pokemon: Pokemon | undefined;
  #song = new Audio('assets/pokemon-song.mp3');
  #training = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
    route.data.subscribe(data => this.pokemon = data['pokemon']);
  }

  ngOnDestroy(): void {
    this.#song.pause();
  }

  startTraining() {
    this.#song.play();
    this.#training.add(interval(1000).pipe(
      switchMap(_ => this.pokemonService.train(this.pokemon!)),
      tap(data => console.log('pokémon trained! level is ' + data.level))
    ).subscribe(data => this.pokemon = data));
  }

  quitTraining() {
    this.router.navigate(['/pokemon']);
    this.#training?.unsubscribe();
  }

  // resolving method 2
  // @Input() set name(name: string) {
  //   this.pokemonService.get(name).subscribe(data => this.pokemon = data);
  // }

  // constructor(private pokemonService: PokemonService) {}

  // resolving method 1
  // constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
  //   route.params.pipe(
  //     map(params => params['name']),
  //     switchMap(name => pokemonService.get(name))
  //   ).subscribe(data => this.pokemon = data);
  // }

  getPokemonImage(pokemon: Pokemon): string {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`;
  }
}
