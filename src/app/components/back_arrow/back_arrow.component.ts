import { Component } from "@angular/core";
import { ButtonWithFixedHeight } from "../../components_interfaces/button_with_fixed_height.component";

@Component({
    selector: 'back_arrow',
    templateUrl: './back_arrow.component.html',
    styleUrl: './back_arrow.component.scss'
})
export class BackArrow extends ButtonWithFixedHeight {

}