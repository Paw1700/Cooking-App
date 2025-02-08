import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ContentBox } from "../../../../components/content_box.component";
import { AddButton } from "../../../../components/add_button/add_button.component";
import { Step } from "../../../../models";

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
    @Input({required: true}) edit_mode = true
    @Input() steps_list: Step[] = []
    
    @Output("updated_steps_list") updated_steps_list_emitter = new EventEmitter<Step[]>()

    addStep() {
        this.steps_list.push({description: ''})
    }

    changeStepData(index: number, event: Event) {
        const value = (event.target as HTMLInputElement).value
        this.steps_list[index].description = value ? value : ''
        this.updateStepsList()
    }

    private updateStepsList() {
        this.updated_steps_list_emitter.emit(this.steps_list)
    }
}