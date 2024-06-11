import { Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AutosComponent } from './components/autos/autos.component';
import { DeezerComponent } from './components/deezer/deezer.component';

export const routes: Routes = [
    {path: 'traductor', component:TraductorComponent},
    {path: 'noticias', component:NoticiasComponent},
    {path: 'autos', component:AutosComponent},
    {path: 'musica', component:DeezerComponent},
    {path: '', component:TraductorComponent}
];
