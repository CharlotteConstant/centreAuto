import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../voiture.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
voitures: Voiture[] = [];
p = 1;

  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
       this.voitureService.findAll().subscribe(data => {this.voitures = data;
       });
  }

}
