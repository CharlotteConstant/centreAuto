import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from './model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  voiture!: Voiture[];

  link = '';
  constructor(private http: HttpClient) { }
    findAll(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>('http://127.0.0.1:8000');
  }

  findOneById(id: number): Observable<Voiture> {
    this.link = 'http://127.0.0.1:8000/ad';
    return this.http.get<Voiture>(this.link + '/' + id);
  }
  /*

     add(voiture: Voiture): Observable<Voiture>{
      return this.http.post<Voiture>(this.url, voiture);
    }

    findById(id: number): Observable<Voiture> {
      return this.http.get<Voiture>(`${this.url}/${id}`);
    }


     delete(id: number): Observable<Voiture> {
      return this.http.delete<Voiture>
      (`${this.url}/${id}`);
     }*/
}
