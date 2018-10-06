import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InvestorInfoPage } from './investor-info/investor-info.page';
import { UserInfoPage } from './user-info/user-info.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private modalCtrl: ModalController) { }

  async userRegister() {
    const modal = await this.modalCtrl.create({
      component: UserInfoPage
    });

    return await modal.present();
  }

  async investorRegister() {
    const modal = await this.modalCtrl.create({
      component: InvestorInfoPage
    });

    return await modal.present();
  }
}
