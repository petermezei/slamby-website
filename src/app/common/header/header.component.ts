import { Component, Input } from '@angular/core';
import { MenuItem } from './menu.model';

@Component({
    selector: 'pm-header',
    templateUrl: './header.component.html',
<<<<<<< HEAD
    styleUrls: ['./header.component.scss']
=======
    styleUrls: ['./header.component.css']
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345
})

export class HeaderComponent {
    @Input() theme: String = "theme-default";
    menuItems = [
        new MenuItem("Slamby","/home","logo",false),
        //new MenuItem("Insight","/insight","",false),
        new MenuItem("Pricing","/pricing","",false),
        new MenuItem("Support","/support","",false),
        //new MenuItem("Community","/community","",false),
        new MenuItem("For developers","https://developers.slamby.com","",true)
    ]

    isOpen : Boolean = false;

    menuOpen = function(){
        if(this.isOpen){
            this.isOpen = false;
        }else{
            this.isOpen = true;
        }
    }
}