import { Component } from '@angular/core';

@Component({
  selector: 'app-bestellung',
  standalone: true,
  imports: [],
  templateUrl: './bestellung.component.html',
  styleUrl: './bestellung.component.css',
})
export class BestellungComponent {
  onSubmit() {
    console.log('Hello');
  }
}
