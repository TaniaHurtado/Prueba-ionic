import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditRequisitionPage } from '../edit-requisition/edit-requisition';
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';

/**
 * Generated class for the RequisitionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-requisition-detail',
  templateUrl: 'requisition-detail.html',
})
export class RequisitionDetailPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public requisitions: RequisitionsProvider,) {
    this.item =  navParams.get('item');
    //console.log('item en detail',this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequisitionDetailPage');
  }
  editRequisition(item){
    console.log('item en edit',item);
    this.navCtrl.push(EditRequisitionPage,{item: item});
  }
  
  deleteRequisition(item){
    this.requisitions.deleteRequisitionItem(item);
    this.navCtrl.pop();
  }
}
