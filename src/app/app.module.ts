import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { UsersComponent } from './users/users.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { MovesListComponent } from './moves-list/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    UsersComponent,
    MyGamesComponent,
    GameDashboardComponent,
    PageNotFoundComponent,
    LoginComponent,
    MovesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
