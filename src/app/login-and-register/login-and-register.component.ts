import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../shared/users.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { UserAuthGuard } from '../user-auth.guard';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css']
})




export class LoginAndRegisterComponent implements OnInit {
  registerForm : FormGroup;
  loginForm : FormGroup;
  userRegistered: boolean;


  constructor(private fb: FormBuilder, 
              private userService: UserService,
              private userAuthService: UserAuthService,
              private router: Router
              ) { }       
              

  ngOnInit() {
    this.registerForm = this.fb.group({
      userId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(5)],
      repeatPassword: [''],
      picture: 0,
      description: "Hello, I am a new foodie's dream user!"
    });

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    })
  }

  onSubmit(registerForm) {
    // console.log(registerForm);
    let user = registerForm.value as User;
    this.userService.addUser(user);
  }

  tryLogin(){
    this.userAuthService.login().subscribe(val => {
      console.log(val);
      this.router.navigate(['home']);
    });
  }

  usersArray = this.userService.getUsers();

  onSubmitLogin(loginForm) {
    console.log(loginForm);

    if (loginForm.valid) {
      //loop through users service.
      this.usersArray.forEach((user) => {
        console.log(loginForm.value.username);
        if(user.username == loginForm.value.username){
         //if inputed username & password match
        //take user id and store it in the localStorage
        //https://stackoverflow.com/questions/47847375/where-to-store-the-user-credentials-in-an-angular-application
        localStorage.setItem('userId', JSON.stringify(user.userId));  
        //and log in
         this.tryLogin();
        }
      });

    } else {
      // alert("This user does not exist.");
      this.userRegistered = false;
    }


    
  }
}
