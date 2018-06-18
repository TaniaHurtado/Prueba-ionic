import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateTime } from 'ionic-angular/umd';

/*
  Generated class for the RequisitionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequisitionsProvider {

  url: string = 'https://httpbin.org';
  //requisitionsList: Array<any>
  requisitionsList = [
    { id: 1, title: 'Crear Formulario',description: 'Agregar botón de crear y agregar campos', responsable: 'Juan Perez', place: 'Edificio 401-224', date: new Date('06-18-2018'), priority: true, file: "assets/imgs/logo2.png"},
    { id: 2, title: 'Botón y vista editar', description: 'Agregar botón de editar y cambiar campos',responsable: 'Maria Pinto', place: 'Oficina', date: new Date('06-18-2018'),priority: true},
    { id: 3, title: 'Arreglar vistas',description: 'Arreglar y cuadrar las vistas ', responsable: 'Ivan Rojas', place: 'Casa',date: new Date('06-18-2018')},
    { id: 4, title: 'Agregar datos',description: 'Agregar mas datos a la lista ', responsable: 'Ivan Rojas', place: 'Oficina',date: new Date('06-19-2018')},
    { id: 5, title: 'Hacer filtros',description: 'Fitrar por fechas ', responsable: 'Ivan Rojas', place: 'Oficina',date: new Date('06-19-2018')},
    { id: 6, title: 'Arreglar app unal',description: 'Corregir errores de ultimo merge  ', responsable: 'Ivan Rojas', place: 'Universidad',date: new Date('06-12-2018')}
  ];  
  constructor(public http: HttpClient) {
    console.log('Hello RequisitionsProvider Provider');
    
  }

  params = {
    data: JSON.stringify(this.requisitionsList),
    user: "juansed@inkrementaldev.co"
  }


  loadRequisitions(){
    return this.requisitionsList;
  }

  addRequisitionToList(item: any){
    this.requisitionsList.push(item);

  }

  getITemById(id:any){
    return this.requisitionsList.find(id);
  }
 
  editRequisitionItem(item: any){
    let itemvalue = this.requisitionsList.find(element => {
      return element.id == item.id
    });
    if (itemvalue){
      console.log('itemvalue:',itemvalue);
      let index = this.requisitionsList.indexOf(itemvalue);
      let algo=this.requisitionsList.splice(index,1,item);
      console.log('splice',algo);
      
    }

  }

  deleteRequisitionItem(item: any){
    let itemvalue = this.requisitionsList.find(element => {
      return element.id == item.id
    });
    if (itemvalue){
      console.log('itemvalue:',itemvalue);
      let index = this.requisitionsList.indexOf(itemvalue);
      let algo=this.requisitionsList.splice(index,1);
      console.log('splice',algo);
      
    }

  }
  

}
