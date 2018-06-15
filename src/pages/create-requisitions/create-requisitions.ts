import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';

/**
 * Generated class for the CreateRequisitionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-requisitions',
  templateUrl: 'create-requisitions.html',
})
export class CreateRequisitionsPage {
  task={}
  taskForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public requisitions: RequisitionsProvider, private formBuilder: FormBuilder) {
                
  }
  
  logForm() {
    console.log('todo es:',this.task);
    this.requisitions.addRequisitionToList(this.task);
    this.navCtrl.pop();
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRequisitionsPage');
  }

}
