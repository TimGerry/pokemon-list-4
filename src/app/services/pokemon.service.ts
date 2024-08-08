import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const BASE_URL = environment.baseUrl + '/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(BASE_URL);
  }

  get(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${BASE_URL}/${name}`);
  }
}
