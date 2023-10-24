import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'Home', component:HomeComponent},
{path: 'aboutus', component:AboutusComponent},
{path: 'contactus', component:ContactusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routeComponents=[HomeComponent, AboutusComponent, ContactusComponent];