webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRequisitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requisitions_requisitions__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditRequisitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditRequisitionPage = /** @class */ (function () {
    function EditRequisitionPage(navCtrl, navParams, requisitions, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requisitions = requisitions;
        this.formBuilder = formBuilder;
        this.task = navParams.get("item");
    }
    EditRequisitionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditRequisitionPage');
    };
    EditRequisitionPage.prototype.editForm = function () {
        console.log('todo es:', this.task);
        this.requisitions.editRequisitionItem(this.task);
        this.navCtrl.pop();
    };
    EditRequisitionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-requisition',template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/pages/edit-requisition/edit-requisition.html"*/'<!--\n  Generated template for the EditRequisitionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor">\n    <ion-title>Editar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="editForm()">\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="task.title" name="title" placeholder="Título"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea [(ngModel)]="task.description" name="description" placeholder="Descripción"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="task.place" name="place" placeholder="Lugar"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="task.responsable" name="responsable" placeholder="Responsable" ></ion-input>\n      </ion-item>\n      \n  \n      <button ion-button icon-start type="submit" block>\n        <ion-icon name="checkmark-circle"></ion-icon> Guardar\n         \n      </button>\n     \n    </form>\n  </ion-content>'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/pages/edit-requisition/edit-requisition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_requisitions_requisitions__["a" /* RequisitionsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], EditRequisitionPage);
    return EditRequisitionPage;
}());

//# sourceMappingURL=edit-requisition.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        this.requisitionsList = [
            { id: 1, title: 'Crear Formulario', description: 'Agregar botón de crear y agregar campos', responsable: 'Juan Perez', place: 'Edificio 401-224', date: new Date('06-14-2018'), priority: true },
            { id: 2, title: 'Botón y vista editar', description: 'Agregar botón de editar y cambiar campos', responsable: 'Maria Pinto', place: 'Oficina', date: new Date('06-14-2018'), priority: true },
            { id: 3, title: 'Arreglar vistas', description: 'Arreglar y cuadrar las vistas ', responsable: 'Ivan Rojas', place: 'Casa', date: new Date('06-14-2018') },
            { id: 4, title: 'Agregar datos', description: 'Agregar mas datos a la lista ', responsable: 'Ivan Rojas', place: 'Oficina', date: new Date('06-15-2018') },
            { id: 5, title: 'Hacer filtros', description: 'Fitrar por fechas ', responsable: 'Ivan Rojas', place: 'Oficina', date: new Date('06-15-2018') },
            { id: 6, title: 'Arreglar app unal', description: 'Corregir errores de ultimo merge  ', responsable: 'Ivan Rojas', place: 'Universidad', date: new Date('06-12-2018') }
        ];
        this.userList = [
            { id: 1, name: 'Tania Hurtado', email: 'tphurtadop@inkrementaldev.co', password: 'tphurtadop' },
            { id: 2, name: 'Paola Pinto', email: 'tphurtadop@unal.edu.co', password: 'tphurtadop' },
        ];
        this.url = 'https://httpbin.org';
        this.params = {
            data: JSON.stringify(this.requisitionsList),
            user: "juansed@inkrementaldev.co"
        };
        this.users = {
            data: JSON.stringify(this.userList)
        };
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.login = function (endpoint, credentials, params, reqOpts) {
        if (params === void 0) { params = this.users; }
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts).toPromise().then(function (data) {
            var anyData = data;
            var listUser = JSON.parse(anyData.args.data);
            var user = listUser.find(function (item) { return (item.email == credentials.email && item.password == credentials.password); });
            if (user) {
                return user;
            }
            else {
                return Promise.reject({ status: 401, data: "unautorized" });
            }
        });
    };
    UserProvider.prototype.signup = function (endpoint, params, reqOpts) {
        var _this = this;
        console.log("params", params);
        return this.http.post(this.url + '/' + endpoint, params, reqOpts).toPromise().then(function (data) {
            _this.userList.push(params);
            return params;
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/books/books.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_requisition_edit_requisition__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RequisitionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequisitionDetailPage = /** @class */ (function () {
    function RequisitionDetailPage(navCtrl, navParams, requisitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requisitions = requisitions;
        this.item = navParams.get('item');
        //this.item.file="assets/imgs/logo2.png";
        //console.log('item en detail',this.item);
    }
    RequisitionDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequisitionDetailPage');
    };
    RequisitionDetailPage.prototype.editRequisition = function (item) {
        console.log('item en edit', item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_requisition_edit_requisition__["a" /* EditRequisitionPage */], { item: item });
    };
    RequisitionDetailPage.prototype.deleteRequisition = function (item) {
        this.requisitions.deleteRequisitionItem(item);
        this.navCtrl.pop();
    };
    RequisitionDetailPage.prototype.isNote = function () {
        this.note = true;
        this.file = false;
    };
    RequisitionDetailPage.prototype.isFile = function () {
        this.file = true;
        this.note = false;
    };
    RequisitionDetailPage.prototype.getFile = function () {
        this.fileInput.nativeElement.click();
        console.log("task file:", this.item.file);
    };
    RequisitionDetailPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.item.file = imageData;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    RequisitionDetailPage.prototype.getProfileImageStyle = function () {
        console.log("file choose", 'url(' + this.item.file.value + ')');
        return 'url(' + this.item.file + ')';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], RequisitionDetailPage.prototype, "fileInput", void 0);
    RequisitionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requisition-detail',template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/pages/requisition-detail/requisition-detail.html"*/'<!--\n  Generated template for the RequisitionDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor">\n    <ion-title>Detalles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2 text-center color=\'text\'> {{item.title}}</h2>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center col-4>\n        <button class="buttonIcon"  (click)="editRequisition(item)">\n          <ion-icon class="editIcon" name="create"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col text-center col-4>\n        <button class="buttonIcon" (click)="deleteRequisition(item)">\n          <ion-icon class="trashIcon" name="trash"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col text-center col-4>\n\n        <ion-checkbox class="check" [(ngModel)]="item.priority" name="priority"></ion-checkbox>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-label> Fecha</ion-label>\n          <ion-label color=\'text\'> {{item.date | date: \'d MMM yy\' }} </ion-label>\n        </ion-col>\n        <ion-col col-6>\n          <ion-label> Responsable</ion-label>\n          <ion-label color=\'text\'> {{item.responsable}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div>\n    <p>{{item.description}}</p>\n  </div>\n\n  <div padding >\n      <ion-grid>\n          <ion-row>\n            <ion-col text-center col-6>\n              <button padding class="buttonIcon" icon-start (click)="isNote()">\n                <ion-icon class="editIcon" name="clipboard"></ion-icon>\n                Notas\n              </button>\n            </ion-col>\n            <ion-col text-center col-6>\n              <button padding class="buttonIcon" icon-start (click)="isFile()">\n                <ion-icon class="trashIcon" name="document"></ion-icon>\n                Archivos\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </div>\n  <div *ngIf="note">\n      <textarea placeholder="Agrega notas aquí" [(ngModel)]="item.note" name="note" cols="40" rows="5"></textarea>\n  </div>\n\n  <div *ngIf="file">\n      <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n      <div class="profile-image-wrapper" (click)="getFile()">\n        \n        <div class="profile-image-placeholder" *ngIf="!this.item.file">\n          <ion-icon name="add"></ion-icon>\n          <div>\n            Archivo\n          </div>\n        </div>\n        <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.item.file"></div>\n      </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/pages/requisition-detail/requisition-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__["a" /* RequisitionsProvider */]])
    ], RequisitionDetailPage);
    return RequisitionDetailPage;
}());

//# sourceMappingURL=requisition-detail.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRequisitionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateRequisitionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateRequisitionsPage = /** @class */ (function () {
    function CreateRequisitionsPage(navCtrl, navParams, requisitions, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requisitions = requisitions;
        this.formBuilder = formBuilder;
        this.task = {};
    }
    CreateRequisitionsPage.prototype.logForm = function () {
        console.log('todo es:', this.task);
        this.requisitions.addRequisitionToList(this.task);
        this.navCtrl.pop();
    };
    CreateRequisitionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateRequisitionsPage');
    };
    CreateRequisitionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-requisitions',template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/pages/create-requisitions/create-requisitions.html"*/'<!--\n  Generated template for the CreateRequisitionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor">\n    <ion-title>Nueva</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="task.title" name="title" placeholder="Título"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea [(ngModel)]="task.description" name="description" placeholder="Descripción"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="task.place" name="place" placeholder="Lugar"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="task.responsable" name="responsable" placeholder="Responsable"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="task.date" name="date" placeholder="Fecha"></ion-datetime>\n    </ion-item>\n    <div text-center>\n      <button center ion-button icon-start type="submit">\n        <ion-icon name="checkmark-circle"></ion-icon> Crear\n      </button>\n    </div>\n\n\n  </form>\n</ion-content>'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/pages/create-requisitions/create-requisitions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__["a" /* RequisitionsProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateRequisitionsPage);
    return CreateRequisitionsPage;
}());

//# sourceMappingURL=create-requisitions.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuildingsPage = /** @class */ (function () {
    function BuildingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuildingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuildingsPage');
    };
    BuildingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buildings',template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/pages/buildings/buildings.html"*/'<!--\n  Generated template for the BuildingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor">\n    <ion-title>Lista</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/pages/buildings/buildings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BuildingsPage);
    return BuildingsPage;
}());

//# sourceMappingURL=buildings.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="navbarColor">\n    <ion-title>SIMPLY TASKS</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <h3 >ORGANIZA TU DÍA CON SIMPLY TASKS </h3>\n  <p>\n    Aquí podrás agendar tus tareas diarias, revisar tu lista de mercado, agregar notas y recordatorios y mucho mas..\n\n  </p>\n\n  <div class="divSlides">\n    <ion-slides loop="true"  pager="true" speed="800" autoplay="3000" >\n      <ion-slide *ngFor="let image of [2,3,4]">\n        <img class="imgCarousel" data-src="./assets/imgs/logo{{image}}.png">\n      </ion-slide>\n    </ion-slides>\n  </div>\n<div text-center padding >\n    <button padding ion-button  icon-start (click)="signup()">\n         Regístrate\n    </button>\n    <button padding ion-button  icon-start (click)="login()">\n      Inicia sesión \n  </button>\n</div>\n  \n\n</ion-content>'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_requisitions_list_requisitions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, userService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.account = { email: "tphurtadop@inkrementaldev.co", password: "tphurtadop" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.userService.login("get", this.account).then(function (data) {
            console.log("firstEndpoint", data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__list_requisitions_list_requisitions__["a" /* ListRequisitionsPage */]);
            return "aslkdjalskjd";
        }).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            var toast = _this.toastCtrl.create({
                message: 'El usuario no está registrado',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            console.log("err", err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <form padding (submit)="doLogin()">\n    <ion-list>\n\n      <ion-item>\n        <ion-input placeholder="Email" type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n     \n      <ion-item>\n        <ion-input placeholder="Password" type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>login</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_requisitions_list_requisitions__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, userService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.account = { name: "Tania Hurtado", email: "tphurtadop@inkrementaldev.co", password: "tphurtadop" };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        this.userService.signup("post", this.account).then(function (data) {
            console.log("firstEndpoint", data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__list_requisitions_list_requisitions__["a" /* ListRequisitionsPage */]);
        }).catch(function (err) {
            var toast = _this.toastCtrl.create({
                message: 'LOs datos son incorrectos',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            console.log("err", err);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <form padding (submit)="doSignup()">\n    <ion-list>\n\n      <ion-item>\n        <ion-input placeholder="Nombre" type="text" [(ngModel)]="account.name" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input placeholder="Email" type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input placeholder="Password" type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>signup</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buildings_buildings__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_requisitions_list_requisitions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_requisitions_requisitions__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_requisition_detail_requisition_detail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_requisitions_create_requisitions__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_requisition_edit_requisition__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user_user__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_book_service_book_service__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_buildings_buildings__["a" /* BuildingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_requisitions_list_requisitions__["a" /* ListRequisitionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_requisition_detail_requisition_detail__["a" /* RequisitionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_requisitions_create_requisitions__["a" /* CreateRequisitionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_requisition_edit_requisition__["a" /* EditRequisitionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/books/books.module#BooksPageModule', name: 'BooksPage', segment: 'books', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_buildings_buildings__["a" /* BuildingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_requisitions_list_requisitions__["a" /* ListRequisitionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_requisition_detail_requisition_detail__["a" /* RequisitionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_requisitions_create_requisitions__["a" /* CreateRequisitionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_requisition_edit_requisition__["a" /* EditRequisitionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_requisitions_requisitions__["a" /* RequisitionsProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_book_service_book_service__["a" /* BookServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_requisitions_list_requisitions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buildings_buildings__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        //Variables nombre:tipo
        this.text = "";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'Mis Solicitudes', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_requisitions_list_requisitions__["a" /* ListRequisitionsPage */] },
            { title: 'Ubicaciones', component: __WEBPACK_IMPORTED_MODULE_5__pages_buildings_buildings__["a" /* BuildingsPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.rightMenuClick = function (text) {
        this.text = text;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/app/app.html"*/'<ion-menu id="leftMenu" [content]="content" type="overlay">\n \n  <ion-header no-border padding>\n    <ion-toolbar>\n        <img src="assets/imgs/logo4.png" alt="logo2"> \n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list padding>\n      <button  menuClose ion-item icon-start (click)="openPage(pages[0])">\n        <ion-icon class="iconm" name="home"></ion-icon>Home\n      </button>\n      <button  menuClose ion-item icon-start (click)="openPage(pages[1])">\n        <ion-icon class="iconm" name="list-box"></ion-icon>Mis Tareas\n      </button>\n      <button  menuClose ion-item icon-start (click)="openPage(pages[2])">\n        <ion-icon class="iconm" name="list"></ion-icon>Lista de Compras\n      </button>\n      <button  menuClose ion-item icon-start (click)="openPage(pages[1])">\n        <ion-icon class="iconm" name="book"></ion-icon>Libros\n      </button>\n        <button   menuClose ion-item icon-start (click)="openPage(pages[1])">\n          <ion-icon class="iconm" name="settings"></ion-icon>Configuración\n          </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the BookServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BookServiceProvider = /** @class */ (function () {
    function BookServiceProvider(http) {
        this.http = http;
        this.url = "https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse";
        console.log('Hello BookServiceProvider Provider');
    }
    BookServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BookServiceProvider);
    return BookServiceProvider;
}());

//# sourceMappingURL=book-service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RequisitionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RequisitionsProvider = /** @class */ (function () {
    function RequisitionsProvider(http) {
        this.http = http;
        this.url = 'https://httpbin.org';
        //requisitionsList: Array<any>
        this.requisitionsList = [
            { id: 1, title: 'Crear Formulario', description: 'Agregar botón de crear y agregar campos', responsable: 'Juan Perez', place: 'Edificio 401-224', date: new Date('06-18-2018'), priority: true, file: "assets/imgs/logo2.png" },
            { id: 2, title: 'Botón y vista editar', description: 'Agregar botón de editar y cambiar campos', responsable: 'Maria Pinto', place: 'Oficina', date: new Date('06-18-2018'), priority: true },
            { id: 3, title: 'Arreglar vistas', description: 'Arreglar y cuadrar las vistas ', responsable: 'Ivan Rojas', place: 'Casa', date: new Date('06-18-2018') },
            { id: 4, title: 'Agregar datos', description: 'Agregar mas datos a la lista ', responsable: 'Ivan Rojas', place: 'Oficina', date: new Date('06-19-2018') },
            { id: 5, title: 'Hacer filtros', description: 'Fitrar por fechas ', responsable: 'Ivan Rojas', place: 'Oficina', date: new Date('06-19-2018') },
            { id: 6, title: 'Arreglar app unal', description: 'Corregir errores de ultimo merge  ', responsable: 'Ivan Rojas', place: 'Universidad', date: new Date('06-12-2018') }
        ];
        this.params = {
            data: JSON.stringify(this.requisitionsList),
            user: "juansed@inkrementaldev.co"
        };
        console.log('Hello RequisitionsProvider Provider');
    }
    RequisitionsProvider.prototype.loadRequisitions = function () {
        return this.requisitionsList;
    };
    RequisitionsProvider.prototype.addRequisitionToList = function (item) {
        this.requisitionsList.push(item);
    };
    RequisitionsProvider.prototype.getITemById = function (id) {
        return this.requisitionsList.find(id);
    };
    RequisitionsProvider.prototype.editRequisitionItem = function (item) {
        var itemvalue = this.requisitionsList.find(function (element) {
            return element.id == item.id;
        });
        if (itemvalue) {
            console.log('itemvalue:', itemvalue);
            var index = this.requisitionsList.indexOf(itemvalue);
            var algo = this.requisitionsList.splice(index, 1, item);
            console.log('splice', algo);
        }
    };
    RequisitionsProvider.prototype.deleteRequisitionItem = function (item) {
        var itemvalue = this.requisitionsList.find(function (element) {
            return element.id == item.id;
        });
        if (itemvalue) {
            console.log('itemvalue:', itemvalue);
            var index = this.requisitionsList.indexOf(itemvalue);
            var algo = this.requisitionsList.splice(index, 1);
            console.log('splice', algo);
        }
    };
    RequisitionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RequisitionsProvider);
    return RequisitionsProvider;
}());

//# sourceMappingURL=requisitions.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListRequisitionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requisition_detail_requisition_detail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_requisitions_create_requisitions__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_requisition_edit_requisition__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListRequisitionsPage = /** @class */ (function () {
    function ListRequisitionsPage(navCtrl, navParams, requisitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requisitions = requisitions;
        this.requisitionsList = this.requisitions.loadRequisitions();
        /*  [
          { id: 1, title: 'Vidrio roto', user: 'Juan Perez', place: 'Edificio 401-224'},
          { id: 2, title: 'Cables sueltos', user: 'Maria Pinto', place: 'Edificio 401-224'},
          { id: 3, title: 'Goteras', user: 'Ivan Rojas', place: 'Edificio 401-224'}
        ];
       */
    }
    ListRequisitionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListRequisitionsPage');
    };
    ListRequisitionsPage.prototype.openRequisition = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__requisition_detail_requisition_detail__["a" /* RequisitionDetailPage */], { item: item });
    };
    ListRequisitionsPage.prototype.addRequisition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__create_requisitions_create_requisitions__["a" /* CreateRequisitionsPage */]);
    };
    ListRequisitionsPage.prototype.editRequisition = function (item) {
        console.log('item en edit', item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_requisition_edit_requisition__["a" /* EditRequisitionPage */], { item: item });
    };
    ListRequisitionsPage.prototype.deleteRequisition = function (item) {
        this.requisitions.deleteRequisitionItem(item);
        this.navCtrl.pop();
    };
    ListRequisitionsPage.prototype.changeFilter = function (filterby) {
        this.filterby = filterby;
        console.log(filterby);
    };
    ListRequisitionsPage.prototype.getList = function () {
        var _this = this;
        switch (this.filterby) {
            case 'today':
                return this.requisitionsList.filter(function (item) {
                    if (item.date.getDate() == new Date().getDate() && item.date.getMonth() == new Date().getMonth() && item.date.getFullYear() == new Date().getFullYear())
                        return true;
                    else
                        return false;
                });
            case 'tomorrow':
                return this.requisitionsList.filter(function (item) {
                    if (item.date.getDate() == _this.addDays(1).getDate() && item.date.getMonth() == _this.addDays(1).getMonth() && item.date.getFullYear() == _this.addDays(1).getFullYear())
                        return true;
                    else
                        return false;
                });
            case 'priority':
                return this.requisitionsList.filter(function (item) {
                    if (item.priority)
                        return true;
                    else
                        return false;
                });
            default:
                return this.requisitionsList;
        }
    };
    ListRequisitionsPage.prototype.addDays = function (days, date) {
        if (date === void 0) { date = new Date(); }
        days = parseInt(days, 10);
        return new Date(date.valueOf() + 1000 * 60 * 60 * 24 * days);
    };
    ListRequisitionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-requisitions',template:/*ion-inline-start:"/home/inkremental-7/Prueba-ionic/src/pages/list-requisitions/list-requisitions.html"*/'<!--\n  Generated template for the ListRequisitionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="navbarColor">\n    <ion-title>Tareas</ion-title>\n    <button ion-button menuToggle >\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-label color=\'primary\' item-end text-right> <ion-icon  class="arrow" name="ios-arrow-back" > </ion-icon> </ion-label>\n  \n  <ion-fab bottom right >\n  <button ion-fab color="primary"  (click)="addRequisition()" ><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of getList()">\n      <ion-item >\n              <h2> {{ item.title }} </h2>\n              <p color=\'text\'> {{item.date | date: \'d MMM\' }} </p>\n\n              <ion-icon name="star" class="starIcon" *ngIf="item.priority == true" item-end> </ion-icon>\n            \n        \n      </ion-item>\n      <ion-item-options  side="right">\n        <button style="border-left: 2px solid gray " class="buttonIcon" ion-button clear (click)="openRequisition(item)">\n          <ion-icon class="eyeIcon" name="eye"> </ion-icon>\n        </button>\n        <button class="buttonIcon" ion-button clear (click)="editRequisition(item)">\n          <ion-icon class="editIcon" name="create"> </ion-icon>\n        </button>\n        <button class="buttonIcon" ion-button clear (click)="deleteRequisition(item)">\n          <ion-icon class="trashIcon" name="trash"> </ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    \n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center col-4>\n        <button class="buttonf" ion-button clear (click)="changeFilter(\'today\')">\n          <ion-icon class="iconf" name="clock"> </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col text-center col-4>\n        <button class="buttonf" ion-button clear (click)="changeFilter(\'tomorrow\')">\n          <ion-icon class="iconf" name="partly-sunny"> </ion-icon>\n        </button>\n        \n      </ion-col>\n      <ion-col text-center col-4>\n        <button class="buttonf" ion-button clear (click)="changeFilter(\'priority\')">\n          <ion-icon class="iconf" name="star"> </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/home/inkremental-7/Prueba-ionic/src/pages/list-requisitions/list-requisitions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__["a" /* RequisitionsProvider */]])
    ], ListRequisitionsPage);
    return ListRequisitionsPage;
}());

//# sourceMappingURL=list-requisitions.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map