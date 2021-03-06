import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('fileInput') fileInput;
  item: any;
  priority: boolean;
  note: boolean;
  file: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public requisitions: RequisitionsProvider) {
    this.item =  navParams.get('item');
    //this.item.file="assets/imgs/logo2.png";
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
  isNote(){
    this.note=true;
    this.file=false;
  }
  isFile(){
    this.file=true;
    this.note=false;
  }
  getFile(){
    this.fileInput.nativeElement.click();
    console.log("task file:", this.item.file)
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.item.file= imageData;
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    console.log("file choose",'url(' + this.item.file.value + ')');
    
    return 'url(' + this.item.file + ')'
  }



}
