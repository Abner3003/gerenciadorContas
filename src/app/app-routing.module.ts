import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSelectorComponent } from './components/data-selector/data-selector.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  {path:'home', component: DataSelectorComponent},
  {path:'teste', component: CardsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
