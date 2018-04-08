import { Component } from "@angular/core";
import { NavParams, ViewController, Platform } from "ionic-angular";

@Component({
    selector: 'add-reminder',
    templateUrl: 'add-reminder.html',
})
export class AddReminderModal {

    constructor(params: NavParams, public platform: Platform,

        public viewCtrl: ViewController) {
        console.log(params);
    }

    dismiss() {
        this.viewCtrl.dismiss();
      }

}