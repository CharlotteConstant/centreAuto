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

  getBrands(): Observable<any>{
    this.link = 'http://127.0.0.1:8000/api/brand';
    return this.http.get<any>(this.link);
  }

  getFuels(): Observable<any>{
    this.link = 'http://127.0.0.1:8000/api/fuel';
    return this.http.get<any>(this.link);
  }

  getModelsByBrand(id: number): Observable<any>
  {
    this.link = 'http://127.0.0.1:8000/api/model';
    return this.http.get<any>(this.link + '/' + id);
  }

  addAnnonce(voiture: any): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/ad/new', voiture);
  }

  getAnnoncesByUser(): Observable<Voiture[]>{
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.get<Voiture[]>('http://127.0.0.1:8000/ad/allByUser', {headers});
  }
}
