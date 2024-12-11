import { Component } from "@angular/core";
import { TextBar } from "../../components_interfaces/text_bar.component";

@Component({
    selector: 'wide_text_bar',
    templateUrl: './wide_text_bar.component.html',
    styleUrl: './wide_text_bar.component.scss'
})
export class WideTextBar extends TextBar { }