import {Component, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 loggedIn: any;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.loggedIn().subscribe(data => {
      this.loggedIn = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    console.log(this.loggedIn);
    this.authService.loggedIn();
  }

  ngOnChanges(): void {
    this.loggedIn = this.authService.loggedIn();
  }

  logout(){
    this.authService.logout();
    window.location.replace('/login');
  }

}
