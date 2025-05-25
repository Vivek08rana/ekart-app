import { Component } from "@angular/core";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true,
    imports: [TopMenuComponent, MainMenuComponent]
})
export class HeaderComponent{

}