import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes = [
  {path: '', component: WelcomeComponent},
  {path: 'list', component: ProductListComponent},
  {path: '***', component: NotFoundComponent}
] ;

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
