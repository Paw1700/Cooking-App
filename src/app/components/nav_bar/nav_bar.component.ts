import { Component, inject, OnInit } from "@angular/core";
import { APP_SERVICE } from "../../app.service";
import { NavBarIcon, NavBarIconType } from "./components/nav_bar_icon.component";
import { NgUnsubscriber } from "../../util/ngUnsubscriber";
import { takeUntil } from "rxjs";

@Component({
    selector: 'nav_bar',
    templateUrl: './nav_bar.component.html',
    styleUrl: './nav_bar.component.scss',
    imports: [
        NavBarIcon
    ]
})
export class NavBar extends NgUnsubscriber implements OnInit {
    private APP = inject(APP_SERVICE)

    left_side_option: NavBarIconType | null = null
    center_side_option: NavBarIconType | null = null
    right_side_option: NavBarIconType | null = null

    ngOnInit(): void {
        this.listenToNavBarState()
    }

    nav_bar_clicked(side: 'left' | 'center' | 'right') {
        switch(side) {
            case "left":
                this.APP.STATE.nav_bar_left_side_clicked.next(this.left_side_option)
                break
            case "center":
                this.APP.STATE.nav_bar_center_side_clicked.next(this.center_side_option)
                break
            case "right":
                this.APP.STATE.nav_bar_right_side_clicked.next(this.right_side_option)
                break
        }
    }

    private listenToNavBarState() {
        this.APP.APPERANCE.nav_bar_left_side_icon_option.pipe(takeUntil(this.ngUnsubscriber$)).subscribe( state => {
            this.left_side_option = state
        })
        this.APP.APPERANCE.nav_bar_center_side_icon_option.pipe(takeUntil(this.ngUnsubscriber$)).subscribe( state => {
            this.center_side_option = state
        })
        this.APP.APPERANCE.nav_bar_right_side_icon_option.pipe(takeUntil(this.ngUnsubscriber$)).subscribe( state => {
            this.right_side_option = state
        })
    }
}

