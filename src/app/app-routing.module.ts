import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'home', component:HomeComponent},
{path:'aboutus', component:AboutusComponent},
{path: 'contactus', component:ContactusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }