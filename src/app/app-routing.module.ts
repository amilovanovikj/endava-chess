import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'home', component: LoginComponent},
  {path: 'dashboard', component: GameDashboardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
