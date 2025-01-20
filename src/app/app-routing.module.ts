import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PictureGridComponent } from './picture-grid/picture-grid.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home', data: { label: 'Home' } },
  { path: 'about', component: AboutComponent, title: 'About', data: { label: 'About' } },
  { path: 'contact', component: ContactComponent, title: 'Contact Us', data: { label: 'Contact Us' } },
  { path: 'picturegrid', component: PictureGridComponent, title: 'Pictures' ,data: { label: 'Pictures'}},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const routeOptions: ExtraOptions = {
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
