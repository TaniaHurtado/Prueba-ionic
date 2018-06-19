import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuildingsPage } from '../pages/buildings/buildings';
import { ListRequisitionsPage } from '../pages/list-requisitions/list-requisitions';
import { RequisitionsProvider } from '../providers/requisitions/requisitions';
import { HttpClientModule } from '@angular/common/http';
import { RequisitionDetailPage } from '../pages/requisition-detail/requisition-detail';
import { CreateRequisitionsPage } from '../pages/create-requisitions/create-requisitions';
import { EditRequisitionPage } from '../pages/edit-requisition/edit-requisition';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { UserProvider } from '../providers/user/user';
import { ProfilePage } from '../pages/profile/profile';
import { BookServiceProvider } from '../providers/book-service/book-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuildingsPage,
    ListRequisitionsPage,
    RequisitionDetailPage,
    CreateRequisitionsPage,
    EditRequisitionPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuildingsPage,
    ListRequisitionsPage,
    RequisitionDetailPage,
    CreateRequisitionsPage,
    EditRequisitionPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequisitionsProvider,
    UserProvider,
    BookServiceProvider
  ]
})
export class AppModule {}
