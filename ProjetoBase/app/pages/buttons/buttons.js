import {Page} from 'ionic-angular';
import {Page1} from './page1/page1';
import {Page2} from './page2/page2';
import {Page3} from './page3/page3';
import {Page4} from './page4/page4';


@Page({
  templateUrl: 'build/pages/buttons/buttons.html'
})
export class ButtonsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
    this.tab4Root = Page4;
  }
}
