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
      {titulo:"traductor",icono:"translate"},
      {titulo:"noticias",icono:"newspaper"},
      {titulo:"autos",icono:"car-front-fill"},
      {titulo:"musica",icono:"headphones"},
      {titulo:"biblioteca",icono:"book"},
      
    ];
  }
}
