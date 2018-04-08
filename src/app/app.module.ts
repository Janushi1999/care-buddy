import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RemindersPage } from '../pages/reminders/reminders';
import { AddReminderModal } from '../pages/reminders/add-reminder/add-reminder.modal';
import { PharmaciesPage } from '../pages/pharmacies/pharmacies';
import { DietPlansPage } from '../pages/diet-plans/diet-plans';
import { GamesPage } from '../pages/games/games';
import { SupportServicesPage } from '../pages/support-services/support-services';
import { EmergencyReportingPage } from '../pages/emergency-reporting/emergency-reporting';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RemindersPage,
    AddReminderModal,
    DietPlansPage,
    PharmaciesPage,
    GamesPage,
    SupportServicesPage,
    EmergencyReportingPage  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RemindersPage, AddReminderModal,
    DietPlansPage,
    PharmaciesPage,
    GamesPage,
    SupportServicesPage,
    EmergencyReportingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
