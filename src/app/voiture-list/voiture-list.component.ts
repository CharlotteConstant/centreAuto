import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
voitures: Voiture[] = [];
  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
       this.voitures = this.voitureService.voitures;
  }

}
