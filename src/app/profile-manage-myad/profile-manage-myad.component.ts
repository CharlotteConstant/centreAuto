import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../voiture.service';

@Component({
  selector: 'app-profile-manage-myad',
  templateUrl: './profile-manage-myad.component.html',
  styleUrls: ['./profile-manage-myad.component.css']
})
export class ProfileManageMyadComponent implements OnInit {

  constructor(private voitureService: VoitureService ) { }

  voiture: any;

  ngOnInit(): void {
    this.voitureService.getAnnoncesByUser().subscribe((data: any) => {
      this.voiture = data;
      console.log(this.voiture);
    });
  }

}
