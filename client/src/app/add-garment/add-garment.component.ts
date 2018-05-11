import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../services/user-session.service';
import { ClothesService } from '../services/clothes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-garment',
  templateUrl: './add-garment.component.html',
  styleUrls: ['./add-garment.component.scss']
})
export class AddGarmentComponent implements OnInit {

  garmentInfo = {

  }

  constructor(public userSessionService: UserSessionService, public clothesService: ClothesService ,public router: Router) { }

  ngOnInit() {
  }

  newThread() {
    this.clothesService.newGarment(this.garmentInfo).subscribe( () => this.router.navigate(["/home"]) );
  }

}
