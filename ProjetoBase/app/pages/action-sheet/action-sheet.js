import {Platform, Page, ActionSheet, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/action-sheet/action-sheet.html'
})
export class ActionSheetPage {
  static get parameters() {
    return [[Platform], [NavController]];
  }

  constructor(platform, nav) {
  	this.nav = nav;
  	this.platform = platform;
  }

  openMenu() {
    this.actionSheet = ActionSheet.create({
      title: 'Albums',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    this.nav.present(this.actionSheet);
  }

  onPageWillLeave() {
    this.actionSheet = null;
    console.log('Dismiss ActionSheet');
  }
}