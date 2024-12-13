import { Component, Input } from "@angular/core";
import { ContentBox } from "../../../../components/content_box.component";
import { AddButton } from "../../../../components/add_button/add_button.component";

@Component({
    selector: 'steps_box',
    templateUrl: './steps.component.html',
    styleUrl: './steps.component.scss',
    imports: [
        ContentBox,
        AddButton
    ]
})
export class StepsBox {
    @Input() edit_mode = true
    test_list: boolean[] = Array(10).fill(false)
}