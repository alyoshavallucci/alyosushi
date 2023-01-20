import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlyoScritteScorrevoliComponent } from './alyoscrittescorrevoli/alyoscrittescorrevoli.component';
import { AlyoIconaNomeSitoComponent } from './alyoiconanomesito/alyoiconanomesito.component';
import { AlyofontsComponent } from './alyofonts/alyofonts.component';
import { AlyocoloriComponent } from './alyocolori/alyocolori.component';
import { AlyobottoneswitchComponent } from './alyobottoneswitch/alyobottoneswitch.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlyoScritteScorrevoliComponent,
    AlyoIconaNomeSitoComponent,
    AlyofontsComponent,
    AlyocoloriComponent,
    AlyobottoneswitchComponent,
    ImpostazioniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
