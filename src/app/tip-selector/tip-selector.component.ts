import { Component, Output, EventEmitter } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-tip-selector',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './tip-selector.component.html',
  styleUrl: './tip-selector.component.css'
})
export class TipSelectorComponent {
  @Output() btnVal=new EventEmitter()

  handleEmit(event:any){
    this.btnVal.emit(event)
  }

  handleTipInput(ipt:HTMLInputElement){
    this.btnVal.emit(Number(ipt.value)/100)
  }
  
}
