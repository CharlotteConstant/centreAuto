import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

voitureSearchForm!: FormGroup;


optionsYear: Options = {

    floor: 1950,
    ceil: 2021,
    step: 1
  };

optionsKilometers: Options = {

    floor: 0,
    ceil: 300000,
    step: 20000
  };

optionsPrice: Options = {

    floor: 0,
    ceil: 100000,
    step: 10000
  };


constructor(private fb: FormBuilder, private route: Router, private voitureService: VoitureService) {

}

  changeGetModels(): any {
  console.log(this.selectBrand);
    this.voitureService.getModelsByBrand(this.selectBrand).subscribe(models => {this.models = models;
      console.log(this.models);});

  }


  ngOnInit(): void {
    this.voitureSearchForm = this.fb.group({
      brand: [''],
      model: [''],
      fuel: [''],
      year: new FormControl([1950, 2021]),
      kilometers: new FormControl([0, 300000]),
      price: new FormControl([0, 100000])
    });
    this.voitureService.getBrands().subscribe(brands => { this.brands = brands; });
    this.voitureService.getFuels().subscribe( fuels => { this.fuels = fuels; });

  }


  submitForm(): void{
    const formInfoSearch = this.voitureSearchForm.value;
    console.log(this.voitureSearchForm.value);
    this.voitureService.getAdBySelection(formInfoSearch).subscribe( data => this.route.navigate(['/home']));
  }
}
