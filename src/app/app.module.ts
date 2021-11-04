import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureComponent } from './voiture/voiture.component';
import { VoitureSearchComponent } from './voiture-search/voiture-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaqComponent } from './footer/faq/faq.component';
import { MentionsLegalesComponent } from './footer/mentions-legales/mentions-legales.component';
import { ConditionsGeneralesVenteComponent } from './footer/conditions-generales-vente/conditions-generales-vente.component';
import { PolitiqueConfidentialiteComponent } from './footer/politique-confidentialite/politique-confidentialite.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { LoginComponent } from './login/login.component';
import { VoitureAddComponent } from './voiture-add/voiture-add.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ContactComponent } from './contact/contact.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { ProfileManageMyaccountComponent } from './profile-manage-myaccount/profile-manage-myaccount.component';
import { ProfileManageMyadComponent } from './profile-manage-myad/profile-manage-myad.component';
import { ProfileManageMygarageComponent } from './profile-manage-mygarage/profile-manage-mygarage.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { GarageAddComponent } from './garage-add/garage-add.component';
import { GarageEditComponent } from './garage-edit/garage-edit.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VoitureListComponent,
    VoitureComponent,
    VoitureSearchComponent,
    FaqComponent,
    MentionsLegalesComponent,
    ConditionsGeneralesVenteComponent,
    PolitiqueConfidentialiteComponent,
    VoitureDetailComponent,
    LoginComponent,
    VoitureAddComponent,
    MyProfileComponent,
    ContactComponent,
    MyActivityComponent,
    ProfileManageMyaccountComponent,
    ProfileManageMyadComponent,
    ProfileManageMygarageComponent,
    GarageAddComponent,
    GarageEditComponent,
    VoitureEditComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSliderModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
