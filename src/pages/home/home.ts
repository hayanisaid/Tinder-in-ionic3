import { Component } from '@angular/core';
import { NavController,MenuController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	distance: number = 2;
	dualValue2: any = { lower: 33, upper: 60 };
	text: number = 0;
	gender:string="Women";
	showme:boolean=true;
	lang : string="English";
	headrName:string="Tinder";

  constructor(
  	public navCtrl: NavController,
  	public menuCtrl: MenuController,
  	public platform:Platform)
  	 {
        this.menuCtrl.enable(true)
        if(this.platform.is('ios')){
        	this.headrName="Profile";
        }
        
     }

  chekPlatform() {
   console.log('hello there')
  }
}
