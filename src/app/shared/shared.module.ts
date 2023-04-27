import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SiderbarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SiderbarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }



import { HomePageComponent } from './pages/home-page/home-page.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import {RouterModule} from "@angular/router";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
