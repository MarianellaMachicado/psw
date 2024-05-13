import { Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';

export const routes: Routes = [
    {path: 'tienda', component:Punto1Component},
    {path: 'juego', component:Punto2Component}
];
