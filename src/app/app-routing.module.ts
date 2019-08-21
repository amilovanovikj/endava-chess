import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: GameDashboardComponent,
    children: [
      /* Can use both ../game/:id or just ../:id, stylistic choice */
      { path: 'game/:id', component: GameComponent },
      /* If using ../game/:id, redirect any empty game IDs to the empty/base game */
      { path: 'game', redirectTo: 'game/0', pathMatch: 'full' },
      { path: '', redirectTo: 'game/0', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
