import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-investor-info',
  templateUrl: './investor-info.page.html',
  styleUrls: ['./investor-info.page.scss'],
})
export class InvestorInfoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  

  close() {
    this.modalCtrl.dismiss();
  }

}
