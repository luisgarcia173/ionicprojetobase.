import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
  	this.lastUpdate = '05/04/2016';
  	this.author = 'Luis Garcia';
  }
}
