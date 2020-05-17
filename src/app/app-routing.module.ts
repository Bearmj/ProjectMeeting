import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CreateGroupComponent } from './creategroup/create-group.component';

  
const routes: Routes = [
  {path:'',redirectTo: '/create-group',pathMatch:'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'creategroup', component: CreateGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
