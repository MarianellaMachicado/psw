import { Routes } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';

export const routes: Routes = [
    {path: 'recetas', component:RecetasComponent},
    {path: '', component:RecetasComponent},
];
