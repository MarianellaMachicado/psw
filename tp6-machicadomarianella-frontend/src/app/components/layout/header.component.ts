import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  rutas: any[] = [];
  
  constructor() {
    this.rutas = [
      {ruta:"",titulo:"home",icono:"house-door-fill"},
      {ruta:"productos",titulo:"productos",icono:"cart3"},
      {ruta:"transacciones",titulo:"transacciones",icono:"cash-coin"},
      {ruta:"tickets",titulo:"tickets",icono:"ticket-perforated"}
    ];
  }
}
