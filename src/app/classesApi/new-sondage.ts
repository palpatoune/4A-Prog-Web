export class NewSondage {
  titre: string;
  reponses: string[];
  idSalle: number;
  public: boolean;

  constructor(titre: string, reponses: string[], idSalle: number, access: boolean) {

    this.titre = titre;
    this.reponses = reponses;
    this.idSalle = idSalle;
    this.public = access;

  }

}
