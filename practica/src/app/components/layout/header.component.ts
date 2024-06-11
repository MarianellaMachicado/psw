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
      {titulo:"home",icono:"house-door-fill"},
      {titulo:"generar qr",icono:"qr-code"},
      {titulo:"agentes",icono:"table"},
      {titulo:"biblioteca",icono:"book"},
      {titulo:"recetas",icono:"journal-bookmark"},
      {titulo:"youtube",icono:"collection-play-fill"},
      {titulo:"estrellas",icono:"moon-stars"}
    ];
  }
}
