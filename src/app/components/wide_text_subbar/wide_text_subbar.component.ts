import { Component } from "@angular/core";
import { TextBar } from "../../components_interfaces/text_bar.component";

@Component({
    selector: 'wide_text_subbar',
    templateUrl: './wide_text_subbar.component.html',
    styleUrl: './wide_text_subbar.component.scss'
})
export class WideTextSubBar extends TextBar { }