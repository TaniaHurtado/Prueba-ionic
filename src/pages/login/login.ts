import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ListRequisitionsPage } from '../list-requisitions/list-requisitions';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account={email:"tphurtadop@inkrementaldev.co", password:"tphurtadop"};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userService : UserProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  doLogin(){
    this.userService.login("get",this.account).then(data=>{
      console.log("firstEndpoint",data);
      this.navCtrl.setRoot(ListRequisitionsPage);
      return "aslkdjalskjd"
    }).then(data=>{
      console.log(data);
    }).catch(err=>{
      let toast = this.toastCtrl.create({
        message: 'El usuario no está registrado',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      console.log("err",err);
    }
      
    )
    

  }
}
