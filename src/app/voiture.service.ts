import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from './model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
voitures = [
  new Voiture(1, "Audi Q3 - 2020", "Audi", "Q3", "Avec 150 cv et seulement 250000km au compteur, cette voiture vous fera rugir de plaisir, venez la voir!","Voiture audi toutes options: abs, jantes alu, siège chauffant, clim reversible, toit panoramique, roue de secours, boite à gants refrigéré, ecran multimédia, siège en cuir... Avec seulement 25000Km et ses 150cv, cette voiture s'impose comme une excellente routière.",["assets/img/audiQ3.png"], 36000, 2020, 25000, "essence", "ref0001"),
  new Voiture(2, "BMW M3 - 2019", "BMW", "M3", "Cette routière possède 205cv et 40000 km au compteur. Très confortable, elle est idéale pour les longs trajets.","Cette routière possède 205cv et 40 000km au compteur. Elle est idéale pour les longs trajets. Voici une berline toutes options avec une ligne épurée relevé par des jantes alu 19pouces. N'hésitez plus, elle saura vous séduire!",["assets/img/bmwM3.jpg"], 33000, 2019, 40000, "essence", "ref0002"),
  new Voiture(3, "Mercedes classe G - 2020", "Mercedes", "Classe G", "Venez découvrir ce 4x4 v8 édition limitée! Il vous surprendra autant à la ville qu'à la montagne","Cette routière possède 205cv et 40 000km au compteur. Elle est idéale pour les longs trajets. Voici une berline toutes options avec une ligne épurée relevé par des jantes alu 19pouces. N'hésitez plus, elle saura vous séduire!",["assets/img/mercedesG.jpg"], 33000, 2019, 40000, "essence", "ref0002")
];
  constructor(private http: HttpClient) { }
/*
    findAll(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.url);
  }

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
