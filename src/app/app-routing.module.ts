import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { LoopComponent } from './loop/loop.component';
import { ImagesComponent } from './images/images.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: LoopComponent },
  { path: 'about', component: ImagesComponent },
  { path: 'detail', component: FormComponent },
  { path: 'list', component: ProductlistComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
