import { Routes } from '@angular/router';
import { UsersList } from './users-list/users-list';
import { UsersCreate } from './users-create/users-create';
import { UsersUpdate } from './users-update/users-update';

export const routes: Routes = [
    {
        path:"", component:UsersList
    },
    {
        path:"create", component:UsersCreate
    },
    {
        path:'update/:id', component:UsersUpdate
    }
];
