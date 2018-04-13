import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddPlayComponent } from './odd-play/odd-play.component';
import { EvenPlayComponent } from './even-play/even-play.component'; 

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddPlayComponent,
    EvenPlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
