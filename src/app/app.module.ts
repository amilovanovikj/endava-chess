import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { UsersComponent } from './users/users.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    UsersComponent,
    MyGamesComponent,
    GameDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
