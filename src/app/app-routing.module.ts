import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import Component
import { HomeComponent } from './home/home.component';
import { SondageComponent } from './sondage/sondage.component';
import { AppComponent } from './app.component';

// Auth by Keycloak (Simon is a genious)
import { PermissionGuard } from './coreAuth/model/permission-guard';
import { AuthGuardService as AuthGuard } from './coreAuth/guard/auth-guard.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sondage',canActivate:[AuthGuard], component: SondageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SondageComponent]
