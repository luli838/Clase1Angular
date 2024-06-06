import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {women} from '../data/women.json';
console.log(women)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  styleUrl:'./app.component.css',
  template: `
  <section>
    <h1>Dentro del componente</h1>
    <h2>{{title? title:"There is not title"}}</h2>
    <p>El resultado de la suma es {{num + numB}}</p>
    <br />
    <hr />
    <br />
    @if(user){
      <p>Welcome {{ user }}</p>
    }@else {
      <p>Singn in, please</p>
    }
    </section>
    <section>
    

    </section>
    
    
    `,
   

  //styles:`h1{color: violet}`,
  
})
export class AppComponent {
  title = '';
  num = 10;
  numB = 45;
  user= '';
  women=women;
}
