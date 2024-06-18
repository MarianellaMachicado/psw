import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent {
  transacciones!: Transaccion[];
  emailSeleccionado!: String;
  monedaOrigen!: String;
  monedaDestino!: String;
  emails!: Transaccion[];

  constructor(private transaccionService: TransaccionService) {
    this.initVars();
    
  }

  initVars() {
    this.transacciones=[];
    this.emailSeleccionado="";
    this.monedaOrigen="";
    this.monedaDestino="";
    this.emails=[];
  }
  ngOnInit() {
    this.obtenerTransacciones();
  }
  extraerEmails(){
    
    Object.assign(this.emails,this.transacciones)

    console.log(this.emails);
  }
  //SERVICES
  /**Retorna una lista de todas las transacciones.*/
  obtenerTransacciones(): void {
    this.transaccionService.getTransacciones().subscribe(
      (resultado: any) => {
        console.log(resultado);
        this.transacciones=resultado;
        this.extraerEmails();
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
    this.transaccionService.getTransaccionesByEmail(this.emailSeleccionado).subscribe(
      (resultado: any) => {
        console.log(resultado);
        this.transacciones=resultado;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Retorna una lista de transacciones, segun su moneda de origen y moneda de destino.*/
  obtenerTransaccionesPorDivisas(): void {
    this.transaccionService.getTransaccionesByDivisas(this.monedaOrigen,this.monedaDestino).subscribe(
      (resultado: any) => {
        console.log(resultado);
        this.transacciones=resultado;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
