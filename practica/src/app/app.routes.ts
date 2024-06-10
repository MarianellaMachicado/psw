import { Routes } from '@angular/router';
import { QrComponent } from './components/qr/qr.component';
import { HomeComponent } from './components/home/home.component';
import { AgentesComponent } from './components/agentes/agentes.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'generar qr', component:QrComponent},
    {path: 'agentes', component:AgentesComponent},
    {path: '', component:HomeComponent},
];
