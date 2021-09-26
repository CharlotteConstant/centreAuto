import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VoitureService} from '../voiture.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-voiture-add',
  templateUrl: './voiture-add.component.html',
  styleUrls: ['./voiture-add.component.css']
})
export class VoitureAddComponent implements OnInit {

  brands: any = [];
  selectedBrand!: any;
  models: any = [];
  fuels: any = [];

  addFormAd!: FormGroup;
  formSubmitted = false;


  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private voitureService: VoitureService) {
  }

  onChange(): any {
    this.voitureService.getModelsByBrand(this.selectedBrand).subscribe(model => this.models = model);
  }

  adAnnonceCar(): void{
    this.formSubmitted = true;
    console.log(this.addFormAd.value);
    if (this.addFormAd.valid){
      this.voitureService.addAnnonce(this.addFormAd.value).subscribe(a => {this.router.navigate(['/voiture']);
      });
    }
  }

  ngOnInit(): void {
    this.addFormAd = this.fb.group({
      title: [ , Validators.required],
      kilometers: [, Validators.required],
      model: [, Validators.required],
    description: [, Validators.required],
    price: [, Validators.required],
    year: [, Validators.required],
    fuel: [, Validators.required],
      photos: ['', Validators.required]
    });

    this.voitureService.getBrands().subscribe(data => {
      this.brands = data;
    });

    this.voitureService.getFuels().subscribe(data => {
      this.fuels = data;
    });


  }
}
