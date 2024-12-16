import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NavBarIconType } from "../components/nav_bar/components/nav_bar_icon.component";

@Injectable()
export class APP_APPERANCE_SERVICE {
    nav_bar_left_side_icon_option = new BehaviorSubject<NavBarIconType | null>(null);
    nav_bar_center_side_icon_option = new BehaviorSubject<NavBarIconType | null>(null);
    nav_bar_right_side_icon_option = new BehaviorSubject<NavBarIconType | null>(null);

    setNavBarIconOptions(left: NavBarIconType | null, center: NavBarIconType | null, right: NavBarIconType | null) {
        this.nav_bar_left_side_icon_option.next(left);
        this.nav_bar_center_side_icon_option.next(center);
        this.nav_bar_right_side_icon_option.next(right);
    }
}