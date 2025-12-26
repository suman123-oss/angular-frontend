import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { User } from '../service/user';

@Component({
  selector: 'app-users-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-create.html',
  styleUrl: './users-create.scss',
})
export class UsersCreate {

userForm!:FormGroup;

constructor(private _userService:User){


  this.userForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    skill: new FormControl(''),
  })
}

  submit(){
    console.log(this.userForm.value);
    this._userService.postUser(this.userForm.value).subscribe({next:(resp)=>{
      console.log(resp);
      console.log("submitted successfully");  
      alert("submitted successfully");
      this.userForm.reset();
    }, error:(err)=>{
      console.log(err);
    }})

    
    
  }
}
