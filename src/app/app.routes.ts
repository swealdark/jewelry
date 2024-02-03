import { Routes } from '@angular/router';
import { JewelersComponent } from './components/jewelers/jewelers.component';

export const routes: Routes = [
    {path:'jewelers',component:JewelersComponent},
    {path:'**', pathMatch:'full',redirectTo:'jewelers'},
];
