import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent {
  constructor(private transaccionService: TransaccionService) {}
  /**Retorna una lista de todas las transacciones.*/
  obtenerTransacciones(): void {
    this.transaccionService.getTransacciones().subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Crea una transacción.*/
  crearTransaccion(): void {
    let transaccion= {
      monedaOrigen: "CAD",
      cantidadOrigen: 1200,
      monedaDestino: "USD",
      cantidadDestino: 920,
      emailCliente: "user4@example.com",
      tasaConversion: 0.7667
    }
    this.transaccionService.createTransaccion(transaccion).subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Retorna una lista de transacciones de un cliente por su email.*/
  obtenerTransaccionesPorEmail(): void {
    let email="user4@example.com";
    this.transaccionService.getTransaccionesByEmail(email).subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Retorna una lista de transacciones, segun su moneda de origen y moneda de destino.*/
  obtenerTransaccionesPorDivisas(): void {
    let origen="EUR";
    let destino="GBP";
    this.transaccionService.getTransaccionesByDivisas(origen,destino).subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
