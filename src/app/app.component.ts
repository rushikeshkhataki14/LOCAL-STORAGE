import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-form';
  user:any = new Array() ;


  constructor(){}


  ngOnInit(): void {

  }



  submit(){
    alert("cheak local storage")

    this.user = {
      name:"rushi",
      city:"sadoli"
    }

     console.log(this.user);



     localStorage.setItem("login data",JSON.stringify(this.user));


  }
}

