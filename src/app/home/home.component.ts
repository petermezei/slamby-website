import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: './home.component.jade',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    constructor (title: Title){
        title.setTitle("Slamby - Understanding Data Made Simple");
    }
}