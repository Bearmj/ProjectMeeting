import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamburgerComponent } from './shared/hamburger/hamburger.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateGroupComponent } from './creategroup/create-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    ProfileComponent,
    CreateGroupComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
