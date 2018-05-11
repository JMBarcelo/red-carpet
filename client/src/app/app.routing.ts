import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AllMyClothesComponent } from './all-my-clothes/all-my-clothes.component';
import { AllMyGroupsComponent } from './all-my-groups/all-my-groups.component';
import { AllMyFavslistsComponent } from './all-my-favslists/all-my-favslists.component';
import { AddGarmentComponent } from './add-garment/add-garment.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { NewFavslistComponent } from './new-favslist/new-favslist.component';

export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: UserViewComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'clothes', component: AllMyClothesComponent},
  { path: 'groups', component: AllMyGroupsComponent},
  { path: 'favslists', component: AllMyFavslistsComponent},
  { path: 'clothes/new', component: AddGarmentComponent},
  { path: 'groups/new', component: NewGroupComponent},
  { path: 'favslists/new', component: NewFavslistComponent},
];