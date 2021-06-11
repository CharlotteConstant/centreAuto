import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
@Input() voit!: Voiture;

  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
  }

}
