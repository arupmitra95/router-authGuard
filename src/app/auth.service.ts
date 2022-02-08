import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn:boolean = false;
  
  isAuthenticated(){
    let promise = new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve(this.loggedIn);
      },800)
    });
    return promise;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
  constructor() { }
}
