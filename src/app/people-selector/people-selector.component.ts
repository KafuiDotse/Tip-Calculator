import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-people-selector',
  standalone: true,
  imports: [],
  templateUrl: './people-selector.component.html',
  styleUrl: './people-selector.component.css'
})
export class PeopleSelectorComponent {
  @Output() pNumVal=new EventEmitter()
  focus:boolean=false
  @Input() pNum:string="0"

  handlePNum(ipt:HTMLInputElement){
    this.pNum=ipt.value
    this.pNumVal.emit(this.pNum)
  }

  handleFocus(){
    this.focus=true
  }

  handleBlur(){
    this.focus=false
  }
}
