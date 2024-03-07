import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from './noticias.model';

const API_URL = 'http://localhost:8081/api/noticias'; // Reemplaza con la URL de tu microservicio

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {

  private favoritos: Noticia[] = this.cargarFavoritosDesdeLocalStorage();

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(API_URL);
  }

  buscarPorTitulo(titulo: string): Observable<Noticia[]> {
    const params = { titulo };
    return this.http.get<Noticia[]>(`${API_URL}/buscar`, { params });
  }

  guardarFavorito(noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(API_URL, noticia);
  }

  quitarFavorito(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }

  getFavoritos(): Noticia[] {
    return this.favoritos;
  }

  private cargarFavoritosDesdeLocalStorage(): Noticia[] {
    const favoritosString = localStorage.getItem('favoritos');
    return favoritosString ? JSON.parse(favoritosString) : [];
  }

  private guardarFavoritosEnLocalStorage(): void {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}
