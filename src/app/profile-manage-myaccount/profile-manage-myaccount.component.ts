import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-manage-myaccount',
  templateUrl: './profile-manage-myaccount.component.html',
  styleUrls: ['./profile-manage-myaccount.component.css']
})
export class ProfileManageMyaccountComponent implements OnInit {
user: any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getOne().subscribe( (data: any) => {
      this.user = data;
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getEdit(id).subscribe( (data: any) => {
      this.user = data;
    });
  }

}
