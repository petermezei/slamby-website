import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

import { AppComponent } from './app.component';

import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NotFoundPageComponent } from './404/404.component';
import { ThankYouComponent } from './thankyou/thankyou.component';
import { InsightComponent } from './insight/insight.component';
import { HomeComponent } from './home/home.component';
import { SubmenuComponent } from './common/submenu/submenu.component';
import { PricingComponent } from './pricing/pricing.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { PartnersComponent } from './partners/partners.component';
import { CompanyComponent } from './company/company.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy.component';
import { LegalMenuComponent } from './legal/legal-menu.component';
import { CommercialLicenseComponent } from './legal/commercial-license.component';
import { CommercialLicenseOemComponent } from './legal/commercial-license-oem.component';
import { OpenSourceLicenseComponent } from './legal/open-source-license.component';
import { GnuAgplLicenseComponent } from './legal/gnu-agpl-license.component';

import { SupportComponent } from './support/support.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'insight', component: InsightComponent },
      { path: 'pricing', component: PricingComponent },
      { path: '404', component: NotFoundPageComponent },
      { path: 'thankyou', component: ThankYouComponent },
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'legal/privacy-policy', component: PrivacyPolicyComponent },
      { path: 'legal/commercial-license', component: CommercialLicenseComponent },
      { path: 'legal/commercial-license-oem', component: CommercialLicenseOemComponent },
      { path: 'legal/gnu-agpl-license', component: GnuAgplLicenseComponent },
      { path: 'legal/open-source-license', component: OpenSourceLicenseComponent },
      { path: 'support', component: SupportComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
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
    LegalMenuComponent,
    SupportComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}