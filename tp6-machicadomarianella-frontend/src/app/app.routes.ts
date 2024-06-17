import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';

export const routes: Routes = [
    {path: 'productos', component:ProductoComponent},
    {path: 'producto-form', component:ProductoFormComponent},
    {path: 'producto-form/:id', component:ProductoFormComponent},
    {path: 'transacciones', component:TransaccionComponent},
    {path: 'tickets', component:TicketComponent},
    {path: '', component:HomeComponent}
];
