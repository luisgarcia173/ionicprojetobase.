import {Page, NavController} from 'ionic-angular';


@Page({
    templateUrl: './build/pages/icons/icons.html'
})
export class IconsPage {
 	static get parameters() {
    	return [[NavController]];
  	}

  	constructor(nav) {
	    // use the home icon
	    this.myIcon = "ionic";
  	}
}