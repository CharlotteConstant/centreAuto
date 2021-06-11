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

const routes: Routes = [
  {path: 'home', component:VoitureListComponent},
  {path: 'voiture', component:VoitureListComponent},
  {path: 'voiture/:id', component:VoitureDetailComponent},
  {path: 'login', component:LoginComponent},
  {path:'faq', component:FaqComponent},
  {path:'mentionsLegales', component:MentionsLegalesComponent},
  {path:'conditionsGeneralesVentes', component:ConditionsGeneralesVenteComponent},
  {path:'politiqueConfidentialite', component:PolitiqueConfidentialiteComponent},
   {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
