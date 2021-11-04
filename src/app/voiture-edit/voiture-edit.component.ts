import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {VoitureService} from '../voiture.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.css']
})
export class VoitureEditComponent implements OnInit {
annonce: any;
title: any = [];
description: any = [];
year: any = [];
kilometers: any = [];
price: any = [];
fuel: any = [];
user: any = [];
garage: any = [];
model: any = [];
formEditAd!: FormGroup;

  constructor(private fb: FormBuilder, private voitureService: VoitureService, private router: Router, private route: ActivatedRoute) { }

  getAd(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.voitureService.findOneById(id).subscribe( data => {
      this.annonce = data;
      console.log(this.annonce);
      this.formEditAd = this.fb.group({
        id: new FormControl(this.annonce.id),
        title: new FormControl(this.annonce.title),
        description: new FormControl(this.annonce.description),
        year: new FormControl(this.annonce.year),
        kilometers: new FormControl(this.annonce.kilometers),
        price: new FormControl(this.annonce.price),
        fuel: new FormControl(this.annonce.fuel),
        model: new FormControl(this.annonce.model),
        garage: new FormControl(this.annonce.garage),
        user: new FormControl(this.annonce.user)
      });
    });
  }

  ngOnInit(): void {
    this.getAd();
  }

  submitEditAd(): void{
    if (this.formEditAd.valid){
      console.log(this.formEditAd.value);
      this.voitureService.editAd(this.annonce.id, this.formEditAd.value).subscribe( (data: any) => {this.router.navigate(['/myprofile/ads']);
        console.log(data);
      });
    }
  }

}
