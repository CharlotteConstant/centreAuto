import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GarageService} from '../garage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-garage-add',
  templateUrl: './garage-add.component.html',
  styleUrls: ['./garage-add.component.css']
})
export class GarageAddComponent implements OnInit {
  addGarageForm!: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder, private garageService: GarageService, private router: Router) { }

  ngOnInit(): void {
    this.addGarageForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      addressRue: ['', Validators.required],
      addressCp: ['', Validators.required],
      addressCity: ['', Validators.required],
    });

  }

  submitGarageForm(): void{
    this.formSubmitted = true;

    if (this.addGarageForm.valid){
      console.log(this.addGarageForm.value);
      this.garageService.addGarage(this.addGarageForm.value).subscribe( (data: any) => {
        console.log(data);
        this.formSubmitted = false;
      });
  }

}}
