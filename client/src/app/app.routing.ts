import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserViewComponent } from './user-view/user-view.component';

export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: UserViewComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
];