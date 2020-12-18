import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './../coreAuth/auth/keycloak.service';
import {ApiRequestService} from './../apiService/api-request.service';
import {SalleSondages} from './../classesApi/salle-sondages';
import { NewSondage } from './../classesApi/new-sondage';
import {SondagePublic} from './../classesApi/sondage-public';
import {MatDialog} from '@angular/material/dialog';

var salleSelect;
var sondageSelect;


//Nouveau sondage Form//////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'new-sondage-form',
  templateUrl: './newSondageForm.html',
})
export class NewSondageForm {
  public agentProfile: any = {};
  sondageSalles: SondagePublic[];
  titre: string;
  choix = new Array();
  choixInter: string;
  sondage: NewSondage;


  constructor(private kc: KeycloakService, private api: ApiRequestService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  titreChangeHandler (event: any){
    this.titre = event.target.value;
  }

  choixInterChangeHandler (event: any){
      this.choixInter = event.target.value;
    }

  addChoix(){
    this.choix.push(this.choixInter);
    console.log(this.choix);
  }

  setTitle(){
    console.log(this.titre);
  }

  createNewSondage(){
    this.sondage = new NewSondage(this.titre, this.choix,null,true);
    console.log(this.sondage);
    this.kc.loadProfile()
      .then(user =>{
        this.agentProfile = user;
        this.api.apiNewSondage(this.agentProfile.username, this.sondage);

      })
  }

}




// Pop-up choix vote ///////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'sondage-public-view',
  templateUrl: './sondageVote.html',
})
export class DialogSondagePublic {
  public agentProfile: any = {};
  sondage: SondagePublic;
  choix: string;
  hasvoted: boolean;


  constructor(private kc: KeycloakService, private api: ApiRequestService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.kc.loadProfile()
    .then(user =>{
      this.agentProfile = user;
      this.api.apiSondagesVote(this.agentProfile.username, sondageSelect).subscribe((data : any)=>{
        console.warn("get api data sodages public",data);
        this.sondage = data;
      })

      this.api.apiHasVoted(this.agentProfile.username, sondageSelect).subscribe((data : any)=>{
        console.warn("get api data has voted",data.edward);
        this.hasvoted = data.edward;
      })


    })
  }

  radioChangeHandler (event: any){
    this.choix = event.value;
    console.log(this.choix);
  }

  voter(idSondage: number){
    console.log(this.choix)
    this.kc.loadProfile()
      .then(user =>{
        this.agentProfile = user;
        if(this.hasvoted !=true){
          this.api.voterPost(this.agentProfile.username, idSondage, this.choix);
        }
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

  Delete(Select: number): void {
    this.kc.loadProfile()
      .then(user =>{
        this.agentProfile = user;
        this.api.apiSondagesDelete(this.agentProfile.username, Select);
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

  newSondage(): void{
    const dialogRef = this.dialog.open(NewSondageForm);
  }

}


