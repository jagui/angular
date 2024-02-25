import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { GenerationsComponent } from './components/generations/generations.component';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent, PokemonsComponent, GenerationsComponent],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
