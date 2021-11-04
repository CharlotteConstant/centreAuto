import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GarageService} from '../garage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-garage-edit',
  templateUrl: './garage-edit.component.html',
  styleUrls: ['./garage-edit.component.css']
})
export class GarageEditComponent implements OnInit {
  garage: any;

  name: any = [];
  phone: any = [];
  addressRue: any = [];
  addressCp: any = [];
  addressCity: any = [];
  formEditGarage!: FormGroup;

  constructor(private fb: FormBuilder, private garageService: GarageService, private router: Router, private route: ActivatedRoute) { }

getGarage(): any {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.garageService.getOne(id).subscribe( data => {this.garage = data;
    console.log(this.garage);

    this.formEditGarage = this.fb.group({
      name: new FormControl(this.garage.name),
      phone: new FormControl(this.garage.phone),
      addressRue: new FormControl(this.garage.addressRue),
      addressCp: new FormControl(this.garage.addressCp),
      addressCity: new FormControl(this.garage.addressCity)
   });
  });

}

  ngOnInit(): void {
this.getGarage();

  }

  submitEditGarage(): void{

    if (this.formEditGarage.valid){
      console.log(this.formEditGarage.value);
      this.garageService.editGarage(this.garage.id, this.formEditGarage.value).subscribe( (data: any) => {this.router.navigate(['/myprofile/garages']);
        console.log(data);
      });
    }
  }

}
