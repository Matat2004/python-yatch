import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlottaComponent } from './components/flotta/flotta.component';
import { ContattiComponent } from './components/contatti/contatti.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'flotta', component: FlottaComponent },
    { path: 'contatti', component: ContattiComponent },
    { path: '**', redirectTo: '' } // fallback: reindirizza a Home se il path non esiste
];
