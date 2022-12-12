/// <reference types="Cypress" />
import RandomTxt from '../POM/RandomTxt'
describe("Acct signup",function(){
    const randEmail = new RandomTxt();
    it("verify the sign up",function(){
        cy.visit('/')
    
    //Register acct
    cy.get(".ico-register").click()
    cy.get("#gender-male").check()
    cy.get("#FirstName").type("lukman")
    cy.get("#LastName").type("olabanjo")
    cy.get("[name='DateOfBirthDay']").select("7")
    cy.get("[name='DateOfBirthMonth']").select("February")
    cy.get("[name='DateOfBirthYear']").select("2006")
    cy.get("[data-val-required='Email is required.']").type(randEmail.emailId)
    cy.get("#Company").type("lok company")
    cy.get("[type*='checkbox']").click()
    cy.get("#Password").type("Testing@1")
    cy.get("#ConfirmPassword").type("Testing@1")
    cy.get("#register-button").click()
    cy.get("cy.get('.result')").should("have.value","Your registration completed")
    
    })


})