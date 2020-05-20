import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CreateGroupComponent } from './creategroup/create-group.component';
import { AllTeamComponent } from './all-team/all-team.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

  
const routes: Routes = [
  {path:'',redirectTo: '/Login',pathMatch:'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'creategroup', component: CreateGroupComponent},
  {path: 'allTeam', component: AllTeamComponent},
  {path: 'Register', component: RegisterComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
