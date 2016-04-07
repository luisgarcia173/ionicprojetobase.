import {Page, NavController, NavParams} from 'ionic-angular';
import {BasicPage} from './basic/basic';
import {HeaderPage} from './header/header';
import {ListPage} from './list/list';
import {ImagesPage} from './images/images';
import {BackgroundPage} from './background/background';
import {AdvancedPage} from './advanced/advanced';


@Page({
  templateUrl: 'build/pages/cards/cards.html'
})
export class CardsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items.push({title: 'Basic', note: 'Check it', icon: 'git-commit'});
    this.items.push({title: 'Header', note: 'Check it', icon: 'git-branch'});
    this.items.push({title: 'List', note: 'Check it', icon: 'git-compare'});
    this.items.push({title: 'Images', note: 'Check it', icon: 'git-network'});
    this.items.push({title: 'Background', note: 'Check it', icon: 'git-merge'});
    this.items.push({title: 'Advanced', note: 'Check it', icon: 'git-pull-request'});

  }

  itemTapped(event, item) {
    switch(item.title) {
      case 'Basic':
          this.nav.push(BasicPage);
          break;
      case 'Header':
          this.nav.push(HeaderPage);
          break;
      case 'List':
          this.nav.push(ListPage);
          break;
      case 'Images':
          this.nav.push(ImagesPage);
          break;
      case 'Background':
          this.nav.push(BackgroundPage);
          break;
      case 'Advanced':
          this.nav.push(AdvancedPage);
          break;
      default:
          break;
    }
  }
}
