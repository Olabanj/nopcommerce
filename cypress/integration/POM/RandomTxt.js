/// <reference types="Cypress" />

let randText = ''
let randomNumber = ''

let mailKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 5; i++)
    randText+=mailKey.charAt(Math.floor(Math.random() * mailKey.length));
    randomNumber+= (Math.floor(Math.random() * 100000));



class RandomTxt {
    emailId = randText + randomNumber + "@gmail.com";
    plateNumb = randomNumber + randText;
    
  
}

export default RandomTxt