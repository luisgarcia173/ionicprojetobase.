import {Page, Platform} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/segments/segments.html'
})
export class SegmentsPage {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
  	this.pet = "puppies";
    this.isAndroid = platform.is('android');
  }
}