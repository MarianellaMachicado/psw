import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgentesService } from '../../services/agentes.service';

@Component({
  selector: 'app-agentes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agentes.component.html',
  styleUrl: './agentes.component.css'
})
export class AgentesComponent {
  mostrarBoton: boolean = true;

  agentes: any[] = [];

  constructor(private agentesService: AgentesService) {}

  ngOnInit(): void {
    this.obtenerAgentes();
  }
  obtenerAgentes(): void {
    this.agentesService.getAgentes().subscribe(
      (resultado: any) => {
        this.agentes = resultado;
        console.log(this.agentes);
        this.mostrarBoton = false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
