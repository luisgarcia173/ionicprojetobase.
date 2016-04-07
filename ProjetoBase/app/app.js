import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {TabsPage} from './pages/tabs/tabs';
import {ListsPage} from './pages/lists/lists';
import {ActionSheetPage} from './pages/action-sheet/action-sheet';
import {AlertsPage} from './pages/alerts/alerts';
import {BadgesPage} from './pages/badges/badges';
import {ButtonsPage} from './pages/buttons/buttons';
import {CardsPage} from './pages/cards/cards';
import {GridPage} from './pages/grid/grid';
import {CheckboxPage} from './pages/checkbox/checkbox';
import {IconsPage} from './pages/icons/icons';
import {InputsPage} from './pages/inputs/inputs';
import {ModalPage} from './pages/modal/modal';
import {RadioPage} from './pages/radio/radio';
import {SearchBarPage} from './pages/searchbar/searchbar';
import {SegmentsPage} from './pages/segments/segments';
import {SelectPage} from './pages/select/select';
import {SlidePage} from './pages/slide/slide';
import {TogglePage} from './pages/toggle/toggle';

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Tabs', component: TabsPage },
      { title: 'Lists', component: ListsPage },
      { title: 'ActionSheet', component: ActionSheetPage },
      { title: 'Alerts', component: AlertsPage },
      { title: 'Badges', component: BadgesPage },
      { title: 'Buttons', component: ButtonsPage },
      { title: 'Cards', component: CardsPage },
      { title: 'Grid', component: GridPage },
      { title: 'Checkbox', component: CheckboxPage },
      { title: 'Icons', component: IconsPage },
      { title: 'Inputs', component: InputsPage },
      { title: 'Modal', component: ModalPage },
      { title: 'Radio', component: RadioPage },
      { title: 'SearchBar', component: SearchBarPage },
      { title: 'Segments', component: SegmentsPage },
      { title: 'Select', component: SelectPage },
      { title: 'Slide', component: SlidePage },
      { title: 'Toggle', component: TogglePage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
