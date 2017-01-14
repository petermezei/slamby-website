import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

import { AppComponent } from './app.component';

import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
=======

//import { MetaModule, MetaService, MetaConfig } from 'ng2-meta';
//import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

import { AppComponent } from './app.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NotFoundPageComponent } from './404/404.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { InsightComponent } from './insight/insight.component';
import { HomeComponent } from './home/home.component';
import { SubmenuComponent } from './common/submenu/submenu.component';
import { PricingComponent } from './pricing/pricing.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { PartnersComponent } from './partners/partners.component';
import { CompanyComponent } from './company/company.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy.component';
import { LegalMenuComponent } from './legal/legal-menu.component';
import { LegalComponent } from './legal/legal.component';
import { CommercialLicenseComponent } from './legal/commercial-license.component';
import { CommercialLicenseOemComponent } from './legal/commercial-license-oem.component';
import { OpenSourceLicenseComponent } from './legal/open-source-license.component';
import { GnuAgplLicenseComponent } from './legal/gnu-agpl-license.component';
import { SupportComponent } from './support/support.component';
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
<<<<<<< HEAD
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    Ng2PageScrollModule.forRoot()
=======
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'insight',
        component: InsightComponent,
        pathMatch: 'full',
        data: {meta:{title:"Insight"}}
      },
      {
        path: 'pricing', 
        component: PricingComponent,
        pathMatch: 'full',
        data: {meta:{title:"Pricing",description:"Slamby pricing, on-premise, SaaS, core-based, open-source."}}
      },
      {
        path: '404',
        component: NotFoundPageComponent,
        pathMatch: 'full',
        data: {meta:{title:"Page not found",description:"The requested page is not found."}}
      },
      {
        path: 'thank-you',
        component: ThankYouComponent,
        pathMatch: 'full',
        data: {meta:{title:"Thank You" }}
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
        pathMatch: 'full',
        data: {meta:{title:"Getting started",description:"Quick tutorial about Slamby install steps, pricing, licenses, support, SDKs, related softwares and Slamby Insight."}}
      },
      {
        path: 'partners',
        component: PartnersComponent,
        pathMatch: 'full',
        data: {meta:{title:"Partners",description:"Slamby partners who helped a lot to us."}}
      },
      {
        path: 'company',
        component: CompanyComponent,
        pathMatch: 'full',
        data: {meta:{title:"Company",description:"We love what we do, if you need more information about Slamby, just contact us anytime at hello@slamby.com"}}
      },
      {
        path: 'legal',
        component: LegalComponent,
        pathMatch: 'full',
        data: {meta:{title:"Legal"}}
      },
      {
        path: 'legal/privacy-policy',
        component: PrivacyPolicyComponent,
        pathMatch: 'full',
        data: {meta:{title:"Privacy policy"}}
      },
      {
        path: 'legal/commercial-license',
        component: CommercialLicenseComponent,
        pathMatch: 'full',
        data: {meta:{title:"Commercial license"}}
      },
      {
        path: 'legal/commercial-license-oem',
        component: CommercialLicenseOemComponent,
        pathMatch: 'full',
        data: {meta:{title:"Commercial license for OEMs"}}
      },
      {
        path: 'legal/gnu-agpl-license',
        component: GnuAgplLicenseComponent,
        pathMatch: 'full',
        data: {meta:{title:"GNU AGPL V3 license"}}
      },
      {
        path: 'legal/open-source-license',
        component: OpenSourceLicenseComponent,
        pathMatch: 'full',
        data: {meta:{title:"Open-source license"}}
      },
      {
        path: 'support',
        component: SupportComponent,
        pathMatch: 'full',
        data: {meta:{title:"Support"}}
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ])
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    HomeComponent
  ],
  providers: [
  ],
=======
    FooterComponent,
    NotFoundPageComponent,
    ThankYouComponent,
    GettingStartedComponent,
    InsightComponent,
    HomeComponent,
    SubmenuComponent,
    PricingComponent,
    PartnersComponent,
    CompanyComponent,
    PrivacyPolicyComponent,
    CommercialLicenseComponent,
    CommercialLicenseOemComponent,
    GnuAgplLicenseComponent,
    OpenSourceLicenseComponent,
    LegalComponent,
    LegalMenuComponent,
    SupportComponent
  ],
  providers: [],
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345
  bootstrap: [ AppComponent ]
})

export class AppModule {}