import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() text:string=""
  @Input() className:string=""
  @Input() value=0
  resetVal:boolean=false
  @Output() btnVal=new EventEmitter()
  @Output() reset=new EventEmitter()

  ngOnInit(){
    if(this.className==""){
      this.className="tip-primary"
    }
  }

  btnValHandeler(){
    if(this.text=="Reset"){
      this.resetVal=true
      this.reset.emit(this.resetVal)
      this.resetVal=false
      this.reset.emit(this.resetVal)
    }
    else{
      this.btnVal.emit(this.value)
    }
  }
}
