import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListComponent }      from './list/list.component';
import { DetailComponent }      from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { MathComponent } from './math/math.component';

const routes: Routes = [

  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add', component:AddComponent},
  { path: 'search', component:SearchComponent},
  { path: 'math', component:MathComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}