import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voiture.service';
import {Voiture} from '../model/voiture.model';

@Component({
  selector: 'app-voiture-detail',
  templateUrl: './voiture-detail.component.html',
  styleUrls: ['./voiture-detail.component.css']
})
export class VoitureDetailComponent implements OnInit {
  voit: any = [];

  constructor(private route: ActivatedRoute, private voitureService: VoitureService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.voitureService.findOneById(id).subscribe( data => {this.voit = data;
    });

  }



}
