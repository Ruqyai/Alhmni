import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { details } from '../shared/data';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  cities: string[] = [];

  constructor(public alertController: AlertController) { }

  ngOnInit() { }

  async presentAreaCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      mode: 'ios',
      inputs: [
        {
          name: 'farming',
          type: 'checkbox',
          label: 'الزراعة',
          value: 'value1',
          checked: true
        },

        {
          name: 'creating',
          type: 'checkbox',
          label: 'الصناعة',
          value: 'value2'
        },

        {
          name: 'fun',
          type: 'checkbox',
          label: 'الترفيه',
          value: 'value3'
        }
      ],
      buttons: [
        {
          text: 'الغاء',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'تأكيد',
          handler: () => {
            // this.cities =
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentCitiesCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      mode: 'ios',
      inputs: [
        {
          name: 'jeddah',
          type: 'checkbox',
          label: 'جدة',
          value: 'value1',
          checked: true
        },

        {
          name: 'Riyadh',
          type: 'checkbox',
          label: 'رياض',
          value: 'value2'
        },

        {
          name: 'Makkah',
          type: 'checkbox',
          label: 'مكة',
          value: 'value3'
        }
      ],
      buttons: [
        {
          text: 'الغاء',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'تأكيد',
          handler: () => {
            // this.cities =
            console.log(alert.inputs[1].checked);
          }
        }
      ]
    });

    await alert.present();
  }

  onSelect(event) {
    console.log(event);
  }

}
