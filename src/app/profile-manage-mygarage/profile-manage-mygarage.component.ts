import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GarageService} from '../garage.service';

@Component({
  selector: 'app-profile-manage-mygarage',
  templateUrl: './profile-manage-mygarage.component.html',
  styleUrls: ['./profile-manage-mygarage.component.css']
})
export class ProfileManageMygarageComponent implements OnInit {

  constructor(private garageService: GarageService, private route: ActivatedRoute, private router: Router) {
  }

  garage: any;

  garageAd: any;

  delete(id: number){
    this.garageService.delete(id).subscribe(r => location.reload() );
  }

  ngOnInit(): void {

    this.garageService.getAllByUser().subscribe((data: any) => {
      this.garage = data;
console.log(this.garage);
    });



  }
}
