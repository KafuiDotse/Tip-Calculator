import { Component,EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillComponent } from "./bill/bill.component";
import { TipSelectorComponent } from "./tip-selector/tip-selector.component";
import { PeopleSelectorComponent } from "./people-selector/people-selector.component";
import { DisplayCardComponent } from "./display-card/display-card.component";
import { BtnComponent } from "./btn/btn.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BillComponent, TipSelectorComponent, PeopleSelectorComponent, DisplayCardComponent, BtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  amount:string="0.00"
  tipAmount:string="0.00"
  pNum:string="0"
  total="0"
  
  handleBill(event:any){
    this.amount=event
    this.total=String(Number(this.pNum)*(Number(this.amount)+Number(this.tipAmount)))
  }

  handleEmit(event:any){
    this.tipAmount=String(event)
    this.total=String(Number(this.pNum)*(Number(this.amount)+Number(this.tipAmount)))
  }

  handlePnum(event:any){
    this.pNum=event
    this.total=String(Number(this.pNum)*(Number(this.amount)+Number(this.tipAmount)))
  }

  handleReset(event:any){
    if(event==true){
      this.amount="0.00"
      this.tipAmount="0.00"
      this.pNum="0"
      this.total="0"
    }
  }
  
}
