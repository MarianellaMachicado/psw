
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QrService } from '../../services/qr.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent {
  texto: String = "";
  cargando: boolean = false;
  mostrar: boolean = false;
  imagen: any;

  constructor(private qrService: QrService) {}
  obtenerQr() {
    this.cargando = true;
    this.qrService.getQr(this.texto).subscribe(
      (resultado: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imagen = reader.result;
          this.cargando = false;
          this.mostrar = true;
        };
        reader.readAsDataURL(resultado);
      },
      (error) => {
        console.log(error);
        this.cargando = false;
      }
    );
  }
}
