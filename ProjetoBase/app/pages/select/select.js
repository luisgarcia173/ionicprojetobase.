import {Page} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/select/select.html'
})
export class SelectPage {
  
  constructor() {
    this.gaming = "n64";
    this.gender = "f";
    this.gaming = "N64";
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  stpSelect() {
    console.log('STP selected');
  }
}