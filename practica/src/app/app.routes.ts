import { Routes } from '@angular/router';
import { QrComponent } from './components/qr/qr.component';
import { HomeComponent } from './components/home/home.component';
import { AgentesComponent } from './components/agentes/agentes.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { PswComponent } from './components/psw/psw.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { RecetasComponent } from './components/recetas/recetas.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'generar qr', component:QrComponent},
    {path: 'agentes', component:AgentesComponent},
    {path: 'biblioteca', component:BibliotecaComponent},
    {path: 'recetas', component:RecetasComponent},
    {path: 'youtube', component:YoutubeComponent},
    {path: 'estrellas', component:PswComponent},
    {path: '', component:HomeComponent}
];
