import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Oferta } from '../interfaces/oferta.interface';

@Injectable({providedIn: 'root'})
export class OfertasService {
  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) { }

  getOfertas():Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${this.baseUrl}/ofertas`);
  }

  getOfertaById(id:string): Observable<Oferta | undefined> {
    return this.http.get<Oferta>(`${this.baseUrl}/ofertas/${id}`)
      .pipe(
        catchError( error => of(undefined) ) //crea un observable de undefined
      );
  }

  //Buscar una oferta
  getSuggestions(query: string): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${this.baseUrl}/ofertas?q=${query}&_limit=6`);
  }



}
