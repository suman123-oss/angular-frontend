import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../service/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-update',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-update.html',
  styleUrl: './users-update.scss',
})
export class UsersUpdate {
  updateUserForm!: FormGroup;
  data: any | undefined;
  constructor(private _userService: User, private _actRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {
    const id = this._actRoute.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      this.getData(id);
    }

    this.updateUserForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      skill: new FormControl(''),
    });
  }

  submit() {
    const id = this._actRoute.snapshot.paramMap.get('id');
    this.updateUserForm.value.id=id;
    console.log(this.updateUserForm.value);

    this._userService.updateUser(this.updateUserForm.value).subscribe({
      next: (resp) => {
        // console.log(resp);
        console.log('updated successfully');
        alert('Updated successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getData(id: any) {
    this._userService.getUserById(id).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.data = resp.result;
        console.log(this.data.firstName);
        

        this.updateUserForm = new FormGroup({
          firstName: new FormControl(this.data.firstName),
          lastName: new FormControl(this.data.lastName),
          email: new FormControl(this.data.email),
          contact: new FormControl(this.data.contact),
          age: new FormControl(this.data.age),
          gender: new FormControl(this.data.gender),
          skill: new FormControl(this.data.skill), 
        });
        
        this.cdr.markForCheck(); 
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
