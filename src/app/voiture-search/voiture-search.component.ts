import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../model/voiture.model';


@Component({
  selector: 'app-voiture-search',
  templateUrl: './voiture-search.component.html',
  styleUrls: ['./voiture-search.component.css']
})
export class VoitureSearchComponent implements OnInit {
  brands: any = [];
  selectBrand!: any;
  models: any = [];
  fuels: any = [];
  formSubmitted = false;

voitureform !: FormGroup;

/*
minValue: number = 1950;
maxValue: number = 2021;
options: Options = {
    floor: 1950,
    ceil: 2021,
    step: 0
  };

minValue2: number = 0;
maxValue2: number = 300000;
options2: Options = {
    floor: 0,
    ceil: 300000,
    step: 20000
  };

minValue3: number = 0;
maxValue3: number = 100000;
options3: Options = {
    floor: 0,
    ceil: 100000,
    step: 10000
  };*/




constructor(private fb: FormBuilder, private router: Router, private voitureService: VoitureService) {
  this.voitureform = this.fb.group({
    brand: [''],
    model: [''],
    fuel: ['']
  });



}

  ngOnInit(): void {
    this.voitureService.getBrands().subscribe(brands => { this.brands = brands; });
    console.log(this.brands);
    this.voitureService.getFuels().subscribe( fuels => { this.fuels = fuels; });
  }

  changeGetModels(): any {
    this.voitureService.getModelsByBrand(this.selectBrand).subscribe(models => this.models = models);
    console.log(this.models);
  }







}
