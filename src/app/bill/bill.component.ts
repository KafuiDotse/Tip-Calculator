import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent {
  focus: boolean=false
  @Input() amount:string=""
  @Output() billVal=new EventEmitter<string>()

  handleFocus(){
    this.focus=true
  }

  handleBlur(){
    this.focus=false
  }

  getVal(bill:HTMLInputElement){
    this.billVal.emit(bill.value)
  }
}
