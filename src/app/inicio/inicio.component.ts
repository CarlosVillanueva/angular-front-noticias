// inicio.component.ts
import { Component } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Noticia } from '../noticias.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  noticias: Noticia[] = [];


  constructor(private noticiasService: NoticiasService) {
    // Obtener las noticias ordenadas por fecha
    this.noticias = this.noticiasService.getNoticias().sort((a, b) => b.fechaPublicacion.getTime() - a.fechaPublicacion.getTime());
  }


  agregarFavorito(noticia: Noticia): void {
    this.noticiasService.agregarFavorito(noticia);
  }
}


