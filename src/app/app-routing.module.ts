import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KindComponent } from './kind/kind.component';
import { TwokindComponent } from './kind/twokind/twokind.component';

import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kind',
    component: KindComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'twokind/:pid',
    component: TwokindComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'detail/:iid',
    component: DetailComponent
  },
  {
    path: 'list/:fcid',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
