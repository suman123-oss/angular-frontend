// import { Component } from '@angular/core';
// import { User } from '../service/user';
// // import { NgFor } from '@angular/common';
// import { RouterLink } from "@angular/router";
// import { NgFor } from '@angular/common';

// @Component({
//   selector: 'app-users-list',
//   standalone:true,
//   imports: [NgFor, RouterLink],
//   templateUrl: './users-list.html',
//   styleUrl: './users-list.scss',
// })
// export class UsersList {
  
//   // userslist:any | undefined;
//   userslist: any[] = [];


//   constructor(private _user:User){
//     this.getData();
//   }

//   getData(){
//     this._user.getUsersList().subscribe({next:(resp:any)=>{
//       console.log(resp);

//       this.userslist= resp.result;

//       },error:(err)=>{
//         console.log(err);
//       }
//     })
//   }
// }






import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../service/user';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush  // if present
})
export class UsersList implements OnInit {

  userslist: any[] = [];

  constructor(
    private _user: User,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._user.getUsersList().subscribe({
      next: (resp: any) => {
        this.userslist = resp.result;
        this.cdr.markForCheck(); 
      },
      error: err => console.log(err)
    });
  }

  deleteUser(id:any){

    console.log(id);
    
    const isCondirm= confirm("Are you sure you want to DELETE?");
    console.log(isCondirm);
    
    if(isCondirm){

      this._user.deleteUser(id).subscribe({next: (resp)=>{
        console.log(resp);
        alert("user deleted successfully!")
        this.getData();
        
      },error:(err)=>{
        console.log(err); 
      }})
    }
  }

}

