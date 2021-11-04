import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-manage-myaccount',
  templateUrl: './profile-manage-myaccount.component.html',
  styleUrls: ['./profile-manage-myaccount.component.css']
})
export class ProfileManageMyaccountComponent implements OnInit {
user: any;

firstname: any = [];
lastname: any = [];
email: any = [];
siret: any = [];
phone: any = [];

  editFormUser!: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }


getUser(): any {
    this.userService.getOne().subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
      this.editFormUser = this.fb.group({
        firstname: new FormControl(this.user.firstname),
        lastname: new FormControl(this.user.lastname),
        email: new FormControl(this.user.email),
        phone: new FormControl(this.user.phone),
        siret: new FormControl(this.user.siret)
      });
    });
}
  ngOnInit(): void {
    this.getUser();
  }

  submitUser(): void{
    console.log(this.editFormUser.value);
    if (this.editFormUser.valid){
      this.userService.getEdit(this.user.id, this.editFormUser.value).subscribe( (data: any) => {
     console.log(data);
      });
    }
  }

}
