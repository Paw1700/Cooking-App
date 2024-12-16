import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NavBarIconType } from "../components/nav_bar/components/nav_bar_icon.component";

@Injectable()
export class APP_STATE_SERVICE {
    nav_bar_left_side_clicked = new Subject<NavBarIconType | null>()
    nav_bar_center_side_clicked = new Subject<NavBarIconType | null>()
    nav_bar_right_side_clicked = new Subject<NavBarIconType | null>()
}