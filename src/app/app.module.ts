import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartpageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodpageComponent,
    CartpageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
