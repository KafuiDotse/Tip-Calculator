import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  standalone: true,
  imports: [],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.css'
})
export class DisplayCardComponent {
  @Input() amount: string=""
  @Input() label:string=""
  @Input() pNum:string=""
}
