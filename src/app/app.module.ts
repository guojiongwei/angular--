import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KindComponent } from './kind/kind.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { TwokindComponent } from './kind/twokind/twokind.component';
import { ListComponent } from './list/list.component';
import { MaskComponent } from './user/mask/mask.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KindComponent,
    CartComponent,
    UserComponent,
    FooterComponent,
    DetailComponent,
    SearchComponent,
    TwokindComponent,
    ListComponent,
    MaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
