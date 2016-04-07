import {Page, NavController, NavParams} from 'ionic-angular';
import {BasicPage} from './basic/basic';
import {InsetPage} from './inset/inset';
import {DividersPage} from './dividers/dividers';
import {HeadersPage} from './headers/headers';
import {IconPage} from './icon/icon';
import {AvatarPage} from './avatar/avatar';
import {MultilinePage} from './multiline/multiline';
import {SlidingPage} from './sliding/sliding';
import {ThumbnailPage} from './thumbnail/thumbnail';


@Page({
  templateUrl: 'build/pages/lists/lists.html'
})
export class ListsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items.push({title: 'Basic', note: 'Check it', icon: 'list-box'});
    this.items.push({title: 'Inset', note: 'Check it', icon: 'list-box-outline'});
    this.items.push({title: 'Dividers', note: 'Check it', icon: 'list-box'});
    this.items.push({title: 'Headers', note: 'Check it', icon: 'list-box-outline'});
    this.items.push({title: 'Icon', note: 'Check it', icon: 'list-box'});
    this.items.push({title: 'Avatar', note: 'Check it', icon: 'list-box-outline'});
    this.items.push({title: 'Multiline', note: 'Check it', icon: 'list-box'});
    this.items.push({title: 'Sliding', note: 'Check it', icon: 'list-box-outline'});
    this.items.push({title: 'Thumbnail', note: 'Check it', icon: 'list-box'});
  }

  itemTapped(event, item) {
    switch(item.title) {
      case 'Basic':
          this.nav.push(BasicPage);
          break;
      case 'Inset':
          this.nav.push(InsetPage);
          break;
      case 'Dividers':
          this.nav.push(DividersPage);
          break;
      case 'Headers':
          this.nav.push(HeadersPage);
          break;
      case 'Icon':
          this.nav.push(IconPage);
          break;
      case 'Avatar':
          this.nav.push(AvatarPage);
          break;
      case 'Multiline':
          this.nav.push(MultilinePage);
          break;
      case 'Sliding':
          this.nav.push(SlidingPage);
          break;
      default:
          this.nav.push(ThumbnailPage);
          break;
    }
  }
}
