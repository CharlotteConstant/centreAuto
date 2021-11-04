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

  editAd(id: number, voiture: any): Observable<Voiture[]> {
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.patch<Voiture[]>('http://127.0.0.1:8000/ad/edit/' + id, voiture, {headers});
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
    this.link = 'http://127.0.0.1:8000/api/model/' + id;
    return this.http.get<any>(this.link);
  }

  getAdBySelection(value: Voiture): Observable<any[]>{
    this.link = 'http://127.0.0.1:8000/ad/search';
    return this.http.post<any[]>(this.link, value);
  }

  addAnnonce(voiture: any): Observable<any>{
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    const username = sessionStorage.getItem('username');
    return this.http.post<any>('http://127.0.0.1:8000/ad/new/' + username, voiture, {headers});
  }

  getAnnoncesByUser(): Observable<any>{
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    const username = sessionStorage.getItem('username');

    return this.http.get<any>('http://127.0.0.1:8000/ads/allByUser' + '/' + username, {headers});
  }

  delete(id: number): Observable<any>{
    return this.http.delete('http://127.0.0.1:8000/ad/delete/' + id);
  }
}
