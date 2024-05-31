import { Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

export const routes: Routes = [
    {path: 'traductor', component:TraductorComponent},
    {path: 'noticias', component:NoticiasComponent},
    {path: '', component:TraductorComponent}
];
