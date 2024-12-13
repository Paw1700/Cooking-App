import { Component } from "@angular/core";
import { ContentBox } from "../../../../components/content_box.component";

@Component({
    selector: 'steps_box',
    templateUrl: './steps.component.html',
    styleUrl: './steps.component.scss',
    imports: [
        ContentBox
    ]
})
export class StepsBox {
    test_list: boolean[] = Array(10).fill(false)
}