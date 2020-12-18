import { Component } from '@angular/core';
import { KeycloakService } from "./coreAuth/auth/keycloak.service";

import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sondage by Thomas & Simon';

  ngOnInit() {
      }

  getKeycloakService() {
      return KeycloakService
  }


}
