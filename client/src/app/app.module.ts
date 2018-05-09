import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { AllMyGroupsComponent } from './all-my-groups/all-my-groups.component';
import { SingleGroupComponent } from './single-group/single-group.component';
import { AllMyClothesComponent } from './all-my-clothes/all-my-clothes.component';
import { SingleGarmentComponent } from './single-garment/single-garment.component';
import { AllMyFavslistsComponent } from './all-my-favslists/all-my-favslists.component';
import { SingleFavslistComponent } from './single-favslist/single-favslist.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserViewComponent } from './user-view/user-view.component';

import { UserSessionService } from './services/user-session.service';

@NgModule({
  declarations: [
    AppComponent,
    AllMyGroupsComponent,
    SingleGroupComponent,
    AllMyClothesComponent,
    SingleGarmentComponent,
    AllMyFavslistsComponent,
    SingleFavslistComponent,
    SignUpComponent,
    LogInComponent,
    UserViewComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
