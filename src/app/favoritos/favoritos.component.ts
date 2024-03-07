// favoritos.component.ts
import { Component } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Noticia } from '../noticias.model';

@Component({
  selector: 'app-favorito',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  noticiasFavoritas: Noticia[] = [];

  // favoritos.component.ts
  constructor(private noticiasService: NoticiasService) {
  // Actualiza la lista de favoritos al inicializar el componente
  console.log('Antes de actualizar lista:', this.noticiasService.getFavoritos());
  this.actualizarListaFavoritos();
  console.log('Después de actualizar lista:', this.noticiasService.getFavoritos());
}


  private actualizarListaFavoritos(): void {
    this.noticiasFavoritas = this.noticiasService.getFavoritos();
  }

  quitarFavorito(noticia: Noticia): void {
    this.noticiasService.quitarFavorito(noticia);
    this.actualizarListaFavoritos();  // Actualiza la lista después de quitar un favorito
  }
}
