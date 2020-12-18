import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './../coreAuth/auth/keycloak.service';
import {ApiRequestService} from './../apiService/api-request.service';
import {SalleSondages} from './../classesApi/salle-sondages';
import {SondagePublic} from './../classesApi/sondage-public';
import {MatDialog} from '@angular/material/dialog';

var salleSelect;
var sondageSelect;



@Component({
  selector: 'sondage-public-view',
  templateUrl: './sondageVote.html',
})
export class DialogSondagePublic {
  public agentProfile: any = {};
  sondage: SondagePublic;
  choix: string;

  constructor(private kc: KeycloakService, private api: ApiRequestService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.kc.loadProfile()
    .then(user =>{
      this.agentProfile = user;
      this.api.apiSondagesVote(this.agentProfile.username, sondageSelect).subscribe((data : any)=>{
        console.warn("get api data sodages public",data);
        this.sondage = data;
      })
    })
  }
}




// Component pop up list sondage d'un salle privé //////////////////////////////////////////////////////////////////////
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './salle-sondages.component.html',
})
export class DialogContentExampleDialog {
  public agentProfile: any = {};
  sondageSalles: SondagePublic[];

  constructor(private kc: KeycloakService, private api: ApiRequestService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.kc.loadProfile()
    .then(user =>{
      this.agentProfile = user;
      this.api.apiSondagesSalle(this.agentProfile.username, salleSelect).subscribe((data : any)=>{
        console.warn("get api data sodages public",data);
        this.sondageSalles = data;
      })
    })
  }

  openDialogSondagePublic(Select: number): void {
      sondageSelect = Select; //salle à afficher (var global car doit être accessible par l'autre component)
      const dialogRef = this.dialog.open(DialogSondagePublic); // on ouvre une pop-up qui est un nouveau component

    }
}

//component page principal//////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.scss']
})
export class SondageComponent implements OnInit {
  public agentProfile: any = {};
  salleSondages: SalleSondages[];
  sondagePublics: SondagePublic[];



  constructor(private kc: KeycloakService, private api: ApiRequestService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.kc.loadProfile()
      .then(user =>{
        this.agentProfile = user;

        this.api.apiSallesSondage(this.agentProfile.username).subscribe((data : any)=>{
          console.warn("get api data salles sondage",data);
          this.salleSondages = data;
        })
        console.warn("adress ", this.api.apiSallesSondagetest(this.agentProfile.username));

        this.api.apiSondagesPublic().subscribe((data : any)=>{
          console.warn("get api data sondages public",data);
          this.sondagePublics = data;
        })
    })
  }

  openDialog(Select: number): void {
    salleSelect = Select; //salle à afficher (var global car doit être accessible par l'autre component)
    const dialogRef = this.dialog.open(DialogContentExampleDialog); // on ouvre une pop-up qui est un nouveau component

  }

  openDialogSondagePublic(Select: number): void {
    sondageSelect = Select; //salle à afficher (var global car doit être accessible par l'autre component)
    const dialogRef = this.dialog.open(DialogSondagePublic); // on ouvre une pop-up qui est un nouveau component

  }

}


