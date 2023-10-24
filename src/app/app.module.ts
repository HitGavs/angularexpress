
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";           //Import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AboutusComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule } from '@angular/router';
//import { BackendComponent } from './backend/backend.component';  //Import
 
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    //BackendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterLink, 
    RouterModule
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 