import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ListRequisitionsPage } from '../list-requisitions/list-requisitions';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  account={name: "Tania Hurtado", email:"tphurtadop@inkrementaldev.co", password:"tphurtadop"};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userService : UserProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup(){
    this.userService.signup("post",this.account).then(data=>{
      console.log("firstEndpoint",data);
      this.navCtrl.setRoot(ListRequisitionsPage);
    }).catch(err=>{
      let toast = this.toastCtrl.create({
        message: 'LOs datos son incorrectos',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      console.log("err",err);
    }
      
    )
    

  }
}
