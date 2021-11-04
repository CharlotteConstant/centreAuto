import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {




  loginForm!: FormGroup;
  redirect = false;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {

    this.loginForm = fb.group({
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void{
    if (this.loginForm.valid){
      const formInfo = this.loginForm.value;
      this.authService.login(formInfo).subscribe((data: any) => {
        this.authService.setTokenInStorage(data.token);
        const tokenDecoded: any = jwtDecode(data.token);
        console.log(tokenDecoded);
        this.authService.setUsernameInStorage(tokenDecoded.username);
        window.location.replace('/myprofile');
        this.router.navigate(['/myprofile']);
        console.log(tokenDecoded.username);


      });
    }
  }

}
