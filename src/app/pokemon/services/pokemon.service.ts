import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.baseUrl + '/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  #pokemonSubject = new BehaviorSubject<Pokemon[] | undefined>(undefined);
  pokemon$ = this.#pokemonSubject.asObservable();

  constructor(private http: HttpClient) {
    this.init();
   }

  get(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${BASE_URL}/${name}`);
  }

  add(pokemon: Pokemon): void {
    this.http.post<Pokemon>(BASE_URL, { ...pokemon, id: pokemon.name.toLowerCase() })
    .subscribe(_ => this.init());
  }

  train(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${BASE_URL}/${pokemon.name}`, { ...pokemon, level: ++pokemon.level })
    .pipe(tap(_ => this.init()));
  }

  private init = () => {
    this.http.get<Pokemon[]>(BASE_URL).pipe(delay(1000)).subscribe(data => this.#pokemonSubject.next(data));
  }
}
