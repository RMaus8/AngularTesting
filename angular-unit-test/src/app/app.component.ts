import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-unit-test';

  constructor(){}

  test(params:any) {
    switch(params){
      case 'test1':
        console.log('test1')
        break;
      case 'test2':
        console.log('test2')
        break;
      default:
        console.log('default')
    }
  }
}
