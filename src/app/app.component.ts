import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accountControl';
  random = 0;


  constructor(private router: Router) {

  }

  public mudarRota(){
    this.random++;

    if(this.random % 2 === 0 ){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/teste']);
    }
  }
}
