import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'add_box',
    templateUrl: './add_box.component.html',
    styleUrl: './add_box.component.scss'
})
export class AddBox {
    @Input({required: true}) title: string = ''
    @Input({required: true}) show: boolean = false

    @Output() emited_data = new EventEmitter<string | null>()

    input_data = ''

    fetchUserInput(input: Event) {
        if (input.target instanceof HTMLInputElement) {
            this.input_data = (input.target.value).toUpperCase()
        }
    }

    emitData(type: 'save' | 'cancel') {
        if (type === 'save') {
            this.emited_data.emit(this.input_data)
        } else {
            this.emited_data.emit(null)
        }
    }
}       