import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../voiture.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-manage-myad',
  templateUrl: './profile-manage-myad.component.html',
  styleUrls: ['./profile-manage-myad.component.css']
})
export class ProfileManageMyadComponent implements OnInit {

  constructor(private voitureService: VoitureService, private route: ActivatedRoute ) { }

  annonce: any;

  delete(id: number){
    this.voitureService.delete(id).subscribe(r => location.reload() );
  }

  ngOnInit(): void {
    this.voitureService.getAnnoncesByUser().subscribe((data: any) => {
      this.annonce = data;
      console.log(this.annonce);
    });
  }

}
