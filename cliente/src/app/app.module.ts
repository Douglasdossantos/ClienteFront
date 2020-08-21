import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { NewComponent } from './page/new/new.component';
import { AllComponent } from './page/all/all.component';

//import { AngularFireModule } from '@angular/fire';
//import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ButtonComponent,
    LoginComponent,
    UserCardComponent,
    TabsComponent,
    ClientesListComponent,
    NewComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    //AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
