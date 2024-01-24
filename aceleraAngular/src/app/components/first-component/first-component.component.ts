import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  address = [
    {
      addressType: "rua ",
      addressName: "bartolomeu",
      address: "rua bartolomeu",
      district: "vila",
      city: "sao paulo",
      state: "sp"
    }
  ]
}
