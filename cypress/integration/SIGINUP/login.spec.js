// <reference types="Cypress" />
import RandomTxt from '../POM/RandomTxt'
import LoginPage from '../POM/LoginPage';
const randEmail = new RandomTxt();
const loginPage = new LoginPage();
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Acct signup",function(){
   
    it("verify the sign up",function(){
        cy.visit('/')
        cy.get(".ico-login").click()
        loginPage.getEmailField().type("Testing@gmail.com")
        loginPage.getPasswordField().type("Testing@1")
        loginPage.checkBoxField().click()
        loginPage.getButtonField().click()
        
    

    
    
    })


})