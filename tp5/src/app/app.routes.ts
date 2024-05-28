import { Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';

export const routes: Routes = [
    {path: 'traductor', component:TraductorComponent},
    {path: '', component:TraductorComponent}
];
