import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../services/user-session.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: any;
  clothes$:Observable<any>;
  clothes:Array<any> = [];

  constructor(public clothesService: ClothesService, public userSessionService: UserSessionService, public router: Router) { }

  ngOnInit() {
    this.clothes$ = this.clothesService.getList();
    this.clothesService.getList().subscribe(clothes => this.clothes = clothes);
  }

  logOut(){
    this.userSessionService.logOut()
    .subscribe(() => this.router.navigate(["/home"]));
  }

}
