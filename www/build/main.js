webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRequisitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-edit-requisition',template:/*ion-inline-start:"/home/inkremental-7/requisitions/src/pages/edit-requisition/edit-requisition.html"*/'<!--\n  Generated template for the EditRequisitionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-requisition</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="editForm()">\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="task.title" name="title" placeholder="Título"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea [(ngModel)]="task.description" name="description" placeholder="Descripción"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="task.place" name="place" placeholder="Lugar"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="task.responsable" name="responsable" placeholder="Responsable" ></ion-input>\n      </ion-item>\n      \n  \n      <button ion-button icon-start type="submit" block>\n        <ion-icon name="checkmark-circle"></ion-icon> Crear\n         \n      </button>\n     \n    </form>\n  </ion-content>'/*ion-inline-end:"/home/inkremental-7/requisitions/src/pages/edit-requisition/edit-requisition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_requisitions_requisitions__["a" /* RequisitionsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], EditRequisitionPage);
    return EditRequisitionPage;
}());

//# sourceMappingURL=edit-requisition.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListRequisitionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requisition_detail_requisition_detail__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_requisitions_create_requisitions__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_requisition_edit_requisition__ = __webpack_require__(100);
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
            case 'other':
                return this.requisitionsList.filter(function (item) {
                    if (item.date < _this.addDays(-1))
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
            selector: 'page-list-requisitions',template:/*ion-inline-start:"/home/inkremental-7/requisitions/src/pages/list-requisitions/list-requisitions.html"*/'<!--\n  Generated template for the ListRequisitionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Mis Solicitudes</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of getList()">\n      <ion-item>\n        {{ item.title }}\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button class="eyeButton" (click)="openRequisition(item)">\n          <ion-icon name="eye"> </ion-icon>\n        </button>\n        <button ion-button color="blue" (click)="editRequisition(item)">\n          <ion-icon name="create"> </ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="deleteRequisition(item)">\n          <ion-icon name="trash"> </ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <button ion-item icon-start (click)="addRequisition()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button clear (click)="changeFilter(\'today\')">\n          <ion-icon name="clock"> </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button clear (click)="changeFilter(\'tomorrow\')">\n          <ion-icon class="iconFooter" name="partly-sunny"> </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button clear (click)="changeFilter(\'other\')">\n          <ion-icon name="calendar"> </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/home/inkremental-7/requisitions/src/pages/list-requisitions/list-requisitions.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__["a" /* RequisitionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__["a" /* RequisitionsProvider */]) === "function" && _c || Object])
    ], ListRequisitionsPage);
    return ListRequisitionsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=list-requisitions.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_requisition_edit_requisition__ = __webpack_require__(100);
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
    RequisitionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requisition-detail',template:/*ion-inline-start:"/home/inkremental-7/requisitions/src/pages/requisition-detail/requisition-detail.html"*/'<!--\n  Generated template for the RequisitionDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalles de la solicitud</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item > \n <ion-label color=\'text\'> {{item.title}}</ion-label> \n \n \n </ion-item>\n <div> <ion-label color=\'text\'> {{item.date | date: \'dd-MM-yyyy\' }}   </ion-label> </div>\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>{{item.description}}\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6>{{item.responsable}}\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<button ion-item icon-start (click)="editRequisition(item)">\n    <ion-icon name="create"></ion-icon>      \n</button>\n<button ion-item icon-start (click)="deleteRequisition(item)">\n    <ion-icon name="trash"></ion-icon>      \n</button>\n</ion-content>\n'/*ion-inline-end:"/home/inkremental-7/requisitions/src/pages/requisition-detail/requisition-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__["a" /* RequisitionsProvider */]])
    ], RequisitionDetailPage);
    return RequisitionDetailPage;
}());

//# sourceMappingURL=requisition-detail.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRequisitionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-create-requisitions',template:/*ion-inline-start:"/home/inkremental-7/requisitions/src/pages/create-requisitions/create-requisitions.html"*/'<!--\n  Generated template for the CreateRequisitionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>create-requisitions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="task.title" name="title" placeholder="Título"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea [(ngModel)]="task.description" name="description" placeholder="Descripción"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="task.place" name="place" placeholder="Lugar"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="task.responsable" name="responsable" placeholder="Responsable" ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="task.date" name="date" placeholder="Fecha"></ion-datetime>\n    </ion-item>\n\n    <button ion-button icon-start type="submit" block>\n      <ion-icon name="checkmark-circle"></ion-icon> Crear\n       \n    </button>\n   \n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/inkremental-7/requisitions/src/pages/create-requisitions/create-requisitions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_requisitions_requisitions__["a" /* RequisitionsProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateRequisitionsPage);
    return CreateRequisitionsPage;
}());

//# sourceMappingURL=create-requisitions.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-buildings',template:/*ion-inline-start:"/home/inkremental-7/requisitions/src/pages/buildings/buildings.html"*/'<!--\n  Generated template for the BuildingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>buildings</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/inkremental-7/requisitions/src/pages/buildings/buildings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BuildingsPage);
    return BuildingsPage;
}());

//# sourceMappingURL=buildings.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/inkremental-7/requisitions/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>SIMPLY TASKS</ion-title>\n      <ion-buttons >\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <h3>HOLA!BIENVENIDO A SIMPLY TASKS </h3>\n  <p>\n    Aquí podrás crear agendar tu tareas \n    carrusel\n  </p>\n  <ion-row>\n    \n    <button ion-button primary block menuToggle>Menu</button>\n   \n  </ion-row>\n</ion-content>\n\n'/*ion-inline-end:"/home/inkremental-7/requisitions/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buildings_buildings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_requisitions_list_requisitions__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_requisitions_requisitions__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_requisition_detail_requisition_detail__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_requisitions_create_requisitions__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_requisition_edit_requisition__ = __webpack_require__(100);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_requisition_edit_requisition__["a" /* EditRequisitionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
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
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_requisition_edit_requisition__["a" /* EditRequisitionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_requisitions_requisitions__["a" /* RequisitionsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_requisitions_list_requisitions__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buildings_buildings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/inkremental-7/requisitions/src/app/app.html"*/'<ion-menu id="leftMenu" [content]="content" type="overlay">\n\n  <ion-header no-border>\n    <ion-toolbar>\n      <ion-title>\n        <img src="assets/imgs/logo4.png" alt="logo2"> </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item icon-start (click)="openPage(pages[0])">\n        <ion-icon name="home"></ion-icon>Home\n      </button>\n      <button menuClose ion-item icon-start (click)="openPage(pages[1])">\n        <ion-icon name="list-box"></ion-icon>Mis Tareas\n      </button>\n      <button menuClose ion-item icon-start (click)="openPage(pages[2])">\n        <ion-icon name="list"></ion-icon>Lista de Compras\n      </button>\n      <button menuClose ion-item icon-start (click)="openPage(pages[1])">\n        <ion-icon name="book"></ion-icon>Libros\n      </button>\n        <button menuClose ion-item icon-start (click)="openPage(pages[1])">\n          <ion-icon name="settings"></ion-icon>Configuración\n          </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/inkremental-7/requisitions/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(200);
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
        //requisitionsList: Array<any>
        this.requisitionsList = [
            { id: 1, title: 'Crear Formulario', description: 'Agregar botón de crear y agregar campos', responsable: 'Juan Perez', place: 'Edificio 401-224', date: new Date('06-14-2018') },
            { id: 2, title: 'Botón y vista editar', description: 'Agregar botón de editar y cambiar campos', responsable: 'Maria Pinto', place: 'Oficina', date: new Date('06-14-2018') },
            { id: 3, title: 'Arreglar vistas', description: 'Arreglar y cuadrar las vistas ', responsable: 'Ivan Rojas', place: 'Casa', date: new Date('06-14-2018') },
            { id: 4, title: 'Agregar datos', description: 'Agregar mas datos a la lista ', responsable: 'Ivan Rojas', place: 'Oficina', date: new Date('06-15-2018') },
            { id: 5, title: 'Hacer filtros', description: 'Fitrar por fechas ', responsable: 'Ivan Rojas', place: 'Oficina', date: new Date('06-15-2018') },
            { id: 6, title: 'Arreglar app unal', description: 'Corregir errores de ultimo merge  ', responsable: 'Ivan Rojas', place: 'Universidad', date: new Date('06-12-2018') }
        ];
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

/***/ })

},[204]);
//# sourceMappingURL=main.js.map