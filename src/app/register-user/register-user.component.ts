import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User(1,"","");
  message:any;
  nachricht:any;

  constructor(private service:RegisterUserService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
      }

  public loginNow(){
    // alert(this.user.name);
    // alert(this.user.password);
    let resp = this.service.doLogin(this.user);
    resp.subscribe(data => {
      this.nachricht = data;
      //alert(data);
  });
    //window.location.href = "https://google.com/about";
}
}