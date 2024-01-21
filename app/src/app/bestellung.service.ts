import { Injectable } from '@angular/core';
import { Auftrag } from './bestellung.model';

@Injectable({
  providedIn: 'root',
})
export class BestellungService {
  private auftraege: Auftrag[] = [];

  constructor() {}

  public addAuftrag(auftrag: Auftrag) {
    let maxId = 0;
    this.auftraege.forEach((auftrag) => {
      if (auftrag.id > maxId) {
        maxId = auftrag.id;
      }
    });
    auftrag.id = maxId + 1;

    this.auftraege.push(auftrag);
  }

  public getAuftraege(): Auftrag[] {
    return this.auftraege;
  }

  public deleteAuftrag(id: number) {
    this.auftraege = [...this.auftraege.filter((auftrag) => auftrag.id !== id)];
  }
}
