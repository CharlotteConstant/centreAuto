import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsGeneralesVenteComponent } from './footer/conditions-generales-vente/conditions-generales-vente.component';
import { FaqComponent } from './footer/faq/faq.component';
import { MentionsLegalesComponent } from './footer/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './footer/politique-confidentialite/politique-confidentialite.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import {VoitureAddComponent} from './voiture-add/voiture-add.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ContactComponent} from './contact/contact.component';
import {MyActivityComponent} from './my-activity/my-activity.component';
import {ProfileManageMyaccountComponent} from './profile-manage-myaccount/profile-manage-myaccount.component';
import {ProfileManageMyadComponent} from './profile-manage-myad/profile-manage-myad.component';
import {ProfileManageMygarageComponent} from './profile-manage-mygarage/profile-manage-mygarage.component';
import {GarageAddComponent} from './garage-add/garage-add.component';

const routes: Routes = [
  {path: 'home', component: VoitureListComponent},
  {path: 'voiture', component: VoitureListComponent},

  {path: 'voiture/add', component: VoitureAddComponent},
  {path: 'myprofile/garages/add', component: GarageAddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'myprofile', component: MyProfileComponent},
  {path: 'myactivity', component: MyActivityComponent},
  {path: 'myprofile/account', component: ProfileManageMyaccountComponent},
  {path: 'myprofile/ads', component: ProfileManageMyadComponent},
  {path: 'myprofile/garages', component: ProfileManageMygarageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'mentionsLegales', component: MentionsLegalesComponent},
  {path: 'conditionsGeneralesVentes', component: ConditionsGeneralesVenteComponent},
  {path: 'politiqueConfidentialite', component: PolitiqueConfidentialiteComponent},
  {path: 'voiture/:id', component: VoitureDetailComponent},
   {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
