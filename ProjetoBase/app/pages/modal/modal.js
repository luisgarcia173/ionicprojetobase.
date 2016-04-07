import {IonicApp, Modal, Platform, NavController, NavParams, Page, ViewController} from 'ionic-angular';



@Page({
  templateUrl: './build/pages/modal/modal.html'
})
export class ModalPage {
  static get parameters() {
    return [[NavController]];
  }
  constructor(nav) {
    this.nav = nav;
  }

  openModal(characterNum) {
    let modal = Modal.create(ModalContentPage, characterNum);
    this.nav.present(modal);
  }
}

@Page({
  templateUrl: './build/pages/modal/modal-content.html'
})
class ModalContentPage {

  static get parameters() {
    return [[Platform], [NavParams], [ViewController]];
  }
  constructor(platform, params, viewCtrl) {
    this.platform = platform;
    this.params = params;
    this.viewCtrl = viewCtrl;
  
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}