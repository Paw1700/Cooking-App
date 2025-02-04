import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from "@angular/core";
import { Button } from "../../components_interfaces/button.component";

@Component({
    selector: 'subcategory_bar',
    templateUrl: './subcategory_bar.component.html',
    styleUrl: './subcategory_bar.component.scss'
})
export class SubCategoryBar extends Button implements OnInit{
    @Input({ required: true }) text: string = ''
    @Input() active_start_state = false
    
    @Output() active_state = new EventEmitter<boolean>()
    
    @HostBinding('class.ACTIVE') get 
    isActive() {
        return this.is_active
    }
    
    @HostListener('click')
    click() {
        this.is_active = !this.is_active
        this.active_state.emit(this.is_active)
    }

    ngOnInit(): void {
        this.is_active = this.active_start_state
    }

    is_active = false
}