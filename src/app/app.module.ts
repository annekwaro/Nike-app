import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { LoopComponent } from './loop/loop.component';
import { ImagesComponent } from './images/images.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FilterComponent } from './productlist/filter/filter.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    LoopComponent,
    ImagesComponent,
    ProductlistComponent,
    FilterComponent,
    SearchComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
