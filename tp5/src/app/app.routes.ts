import { Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';

export const routes: Routes = [
    {path: 'traductor', component:TraductorComponent},
    {path: 'noticias', component:NoticiasComponent},
    {path: 'biblioteca', component:BibliotecaComponent},
    {path: '', component:TraductorComponent}
];
