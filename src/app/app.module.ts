import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

//import Keyckloak
import { AuthGuardService } from "./coreAuth/guard/auth-guard.service";
import { KeycloakService } from "./coreAuth/auth/keycloak.service";
import { SecuredHttpInterceptor } from './coreAuth/interceptor/secured-http.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


//Material module
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SondageComponent } from './sondage/sondage.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatCarouselModule } from '@ngmodule/material-carousel';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SondageComponent
  ],
  imports: [
    MatCarouselModule.forRoot(),
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  providers: [
    KeycloakService,
    AuthGuardService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SecuredHttpInterceptor,
        multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

