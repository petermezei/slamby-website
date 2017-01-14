import { Component } from '@angular/core';
<<<<<<< HEAD
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
    selector: 'pm-app',
    template: `<router-outlet></router-outlet>`
})

export class AppComponent {
    constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
        PageScrollConfig.defaultDuration = 300;
    }
};
=======
//import { MetaService } from 'ng2-meta';
//import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'pm-app',
    template: `<router-outlet></router-outlet>
    <pm-footer></pm-footer>`
})

export class AppComponent {};
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345
