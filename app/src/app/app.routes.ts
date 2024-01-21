import { Routes } from '@angular/router';
import { BestellungComponent } from './bestellung/bestellung.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';

export const routes: Routes = [
  {
    path: '',
    component: BestellungComponent,
  },
  {
    path: 'uebersicht',
    component: UebersichtComponent,
  },
];
