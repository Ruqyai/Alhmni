import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { details } from '../shared/data';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  areas: string[] = ['farming'];
  cities: string[] = ['jeddah'];

  details: any[];
    // options
    view: any[] = [850, 550];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Sector';
    showYAxisLabel = true;
    yAxisLabel = 'Quantity';
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

  constructor(public alertController: AlertController) {
    Object.assign(this, { details });
  }

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
          value: 'farming',
          checked: true
        },

        {
          name: 'creating',
          type: 'checkbox',
          label: 'الصناعة',
          value: 'creating'
        },

        {
          name: 'fun',
          type: 'checkbox',
          label: 'الترفيه',
          value: 'fun'
        }
      ],
      buttons: [
        {
          text: 'الغاء',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'تأكيد',
          handler: () => {
            // this.cities =
            console.log('Ok');
          }
        }
      ]
    });

    await alert.present();
    alert.onWillDismiss().then(a => {
      console.log(a.data.values);
      this.areas = a.data.values;
    });
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
          value: 'jeddah',
          checked: true
        },

        {
          name: 'Riyadh',
          type: 'checkbox',
          label: 'رياض',
          value: 'Riyadh'
        },

        {
          name: 'Makkah',
          type: 'checkbox',
          label: 'مكة',
          value: 'Makkah'
        }
      ],
      buttons: [
        {
          text: 'الغاء',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'تأكيد',
          handler: () => {
            // this.cities =
            console.log('ok');
          }
        }
      ]
    });

    await alert.present();
    alert.onWillDismiss().then(a => {
      console.log(a.data.values);
      this.cities = a.data.values;
    });
  }

  onSelect(event) {
    console.log(event);
  }

}
