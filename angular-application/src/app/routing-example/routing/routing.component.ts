import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {
  constructor(private router: Router){}

  irAlosPipes(){
    this.router.navigate(['/pipe-example'])
  }
}
