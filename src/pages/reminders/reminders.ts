import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddReminderModal } from './add-reminder/add-reminder.modal'
interface IReminder {
  time: String;
  tag: String;
  desc: String;
  img: String;
}
/**
 * Generated class for the RemindersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html',
})
export class RemindersPage {

  reminders: IReminder[] = [
    {
      time: '8.00 AM',
      desc: 'Grand daughter turns 10',
      tag: ' Birthday',
      img: 'assets/imgs/birthday.png'
    },
    {
      time: '9.00 AM',
      desc: 'Grand Son turns 10',
      tag: ' Birthday',
      img: 'assets/imgs/birthday.png'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemindersPage');

  }

  add() {
     console.log("ad")
    let modal = this.modalController.create(AddReminderModal, {});
    modal.present();
  }

}
