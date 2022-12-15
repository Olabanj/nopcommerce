// <reference types="Cypress" />
import RandomTxt from '../POM/RandomTxt'
import LoginPage from '../POM/LoginPage';
const randEmail = new RandomTxt();
const loginPage = new LoginPage();
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Acct signup",function(){
    before(function(){

     cy.fixture("login").then(function(data){
        this.data=data
     })
    })
   
    it("verify the sign up",function(){
        cy.visit('/')
        cy.get(".ico-login").click()
        loginPage.getEmailField().type(this.data.emailField)
        loginPage.getPasswordField().type(this.data.Password)
        loginPage.checkBoxField().click()
        loginPage.getButtonField().click()
        
    

    
    
    })


})