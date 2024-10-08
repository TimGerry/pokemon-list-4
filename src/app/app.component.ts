import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_TITLE } from './app.config';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PokemonModule } from './pokemon/pokemon.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    RouterOutlet,
    PokemonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(@Inject(APP_TITLE) public title: string) {}
}
