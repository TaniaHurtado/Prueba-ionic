import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  requisitionsList = [
    { id: 1, title: 'Crear Formulario', description: 'Agregar botón de crear y agregar campos', responsable: 'Juan Perez', place: 'Edificio 401-224', date: new Date('06-14-2018'), priority: true },
    { id: 2, title: 'Botón y vista editar', description: 'Agregar botón de editar y cambiar campos', responsable: 'Maria Pinto', place: 'Oficina', date: new Date('06-14-2018'), priority: true },
    { id: 3, title: 'Arreglar vistas', description: 'Arreglar y cuadrar las vistas ', responsable: 'Ivan Rojas', place: 'Casa', date: new Date('06-14-2018') },
    { id: 4, title: 'Agregar datos', description: 'Agregar mas datos a la lista ', responsable: 'Ivan Rojas', place: 'Oficina', date: new Date('06-15-2018') },
    { id: 5, title: 'Hacer filtros', description: 'Fitrar por fechas ', responsable: 'Ivan Rojas', place: 'Oficina', date: new Date('06-15-2018') },
    { id: 6, title: 'Arreglar app unal', description: 'Corregir errores de ultimo merge  ', responsable: 'Ivan Rojas', place: 'Universidad', date: new Date('06-12-2018') }
  ];

  userList = [
    { id: 1, name: 'Tania Hurtado', email: 'tphurtadop@inkrementaldev.co', password: 'tphurtadop' },
    { id: 2, name: 'Paola Pinto', email: 'tphurtadop@unal.edu.co', password: 'tphurtadop' },
  ]

  url: string = 'https://httpbin.org';

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  params = {
    data: JSON.stringify(this.requisitionsList),
    user: "juansed@inkrementaldev.co"
  }

  users = {
    data: JSON.stringify(this.userList)
  }

  login(endpoint: string, credentials: { email: any, password: any }, params = this.users, reqOpts?: any): Promise<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts).toPromise().then(data => {
      let anyData: any = data;
      let listUser = JSON.parse(anyData.args.data);
      let user = listUser.find(item => (item.email == credentials.email && item.password == credentials.password))
      if (user) {
        return user
      } else {
        return Promise.reject({ status: 401, data: "unautorized" });
      }

    }

    );
  }

  signup(endpoint: string, params: any, reqOpts?: any): Promise<any> {
    console.log("params",params);
    
    return this.http.post(this.url + '/' + endpoint, params, reqOpts).toPromise().then(data => {
      this.userList.push(params);
      return params;
    }
    );
  }

}
