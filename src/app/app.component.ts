import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onInputLength(value : string){

    const parsedNumber = parseInt(value);
    if(!isNaN(parsedNumber)){
      this.length = parsedNumber;
    }
  }


  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
  
  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  
  onChangeUseLetters(){
    this.useLetters= !this.useLetters;

  }
  
  onButtonClick(){
   const number = '1234567890';
   const letters = 'abcdefghijklmnopqrstuvwxyz';
   const symbols = '!@#$%^&*()';
   
   let validChars = '';
  
   if(this.useLetters){
     validChars += letters;
    }
    
    if(this.useNumbers){
      validChars+= number;
    }

    if(this.useSymbols){
      validChars+= symbols;

    }

    let generatedPwd = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPwd += validChars[index];
      }
      this.password = generatedPwd;


  }
}
