import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RemindersPage } from '../pages/reminders/reminders';
import { EmergencyReportingPage } from '../pages/emergency-reporting/emergency-reporting';
import { GamesPage } from '../pages/games/games';
import { DietPlansPage } from '../pages/diet-plans/diet-plans';
import { PharmaciesPage } from '../pages/pharmacies/pharmacies';
import { SupportServicesPage } from '../pages/support-services/support-services';
import { VoiceTextPage } from '../pages/voice-text/voice-text';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Reminders', component: RemindersPage },
      { title: 'Diet Plan and Exercise Routines', component: DietPlansPage },
      { title: 'Pharmacy', component: PharmaciesPage},
      { title: 'Games', component: GamesPage },
      { title: 'Voice to text Converter', component: VoiceTextPage },
      { title: 'Emergency Reporting', component: EmergencyReportingPage },
      { title: 'Support Services', component:SupportServicesPage  }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
