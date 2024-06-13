import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TicketComponent } from './components/ticket/ticket.component';

export const routes: Routes = [
    {path: 'productos', component:ProductoComponent},
    {path: 'transacciones', component:TransaccionComponent},
    {path: 'tickets', component:TicketComponent},
    {path: '', component:HomeComponent}
];
