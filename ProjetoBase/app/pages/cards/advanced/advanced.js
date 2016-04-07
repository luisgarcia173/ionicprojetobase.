import {Page, NavController, NavParams} from 'ionic-angular';
import {SocialPage} from './social/social';
import {MapPage} from './map/map';
import {WeatherPage} from './weather/weather';

@Page({
  templateUrl: 'build/pages/cards/advanced/advanced.html'
})
export class AdvancedPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items.push({title: 'Social', note: 'Check it', icon: 'contacts'});
    this.items.push({title: 'Map', note: 'Check it', icon: 'globe'});
    this.items.push({title: 'Weather', note: 'Check it', icon: 'cloud-outline'});

  }

  itemTapped(event, item) {
    switch(item.title) {
      case 'Social':
          this.nav.push(SocialPage);
          break;
      case 'Map':
          this.nav.push(MapPage);
          break;
      case 'Weather':
          this.nav.push(WeatherPage);
          break;
      default:
          break;
    }
  }
}
