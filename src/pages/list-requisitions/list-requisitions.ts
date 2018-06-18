import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequisitionDetailPage } from '../requisition-detail/requisition-detail'
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';
import { CreateRequisitionsPage } from '../create-requisitions/create-requisitions';
import { EditRequisitionPage } from '../edit-requisition/edit-requisition';
import { getSymbolIterator } from '@angular/core/src/util';

@Component({
  selector: 'page-list-requisitions',
  templateUrl: 'list-requisitions.html',
})
export class ListRequisitionsPage {
  requisitionsList: Array<any>
  filterby: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public requisitions: RequisitionsProvider) {
    this.requisitionsList = this.requisitions.loadRequisitions();


    /*  [
      { id: 1, title: 'Vidrio roto', user: 'Juan Perez', place: 'Edificio 401-224'},
      { id: 2, title: 'Cables sueltos', user: 'Maria Pinto', place: 'Edificio 401-224'},
      { id: 3, title: 'Goteras', user: 'Ivan Rojas', place: 'Edificio 401-224'}
    ];
   */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListRequisitionsPage');
  }

  openRequisition(item) {
    this.navCtrl.push(RequisitionDetailPage, { item: item });
  }

  addRequisition() {
    this.navCtrl.push(CreateRequisitionsPage);
  }

  editRequisition(item) {
    console.log('item en edit', item);
    this.navCtrl.push(EditRequisitionPage, { item: item });
  }
  deleteRequisition(item) {
    this.requisitions.deleteRequisitionItem(item);
    this.navCtrl.pop();
  }

  changeFilter(filterby) {
    this.filterby = filterby;
    console.log(filterby);
  }

  getList() {
    switch (this.filterby) {
      case 'today':
      return this.requisitionsList.filter((item) => {
        if (item.date.getDate() == new Date().getDate() && item.date.getMonth() == new Date().getMonth() && item.date.getFullYear() == new Date().getFullYear())
          return true;
        else return false;
      })
      case 'tomorrow':
      return this.requisitionsList.filter((item) => {
        if (item.date.getDate() == this.addDays(1).getDate() && item.date.getMonth() == this.addDays(1).getMonth() && item.date.getFullYear() == this.addDays(1).getFullYear())
          return true;
        else return false;
      })
      case 'priority':
      return this.requisitionsList.filter((item) => {
        if (item.priority)
          return true;
        else return false;
      })
    
      default: 
      return this.requisitionsList
      
    }
  }

  addDays(days, date = new Date()) {
    days = parseInt(days, 10);
    return new Date(date.valueOf() + 1000 * 60 * 60 * 24 * days);
}

}

