import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the EditRequisitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-requisition',
  templateUrl: 'edit-requisition.html',
})
export class EditRequisitionPage {
  task: any
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public requisitions: RequisitionsProvider, private formBuilder: FormBuilder) {
      this.task= navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRequisitionPage');
  }

  editForm() {
    console.log('todo es:',this.task);
    this.requisitions.editRequisitionItem(this.task);
    this.navCtrl.pop();
    }

}
