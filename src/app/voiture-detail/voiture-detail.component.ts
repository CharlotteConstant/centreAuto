import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-voiture-detail',
  templateUrl: './voiture-detail.component.html',
  styleUrls: ['./voiture-detail.component.css']
})
export class VoitureDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

  }

}
