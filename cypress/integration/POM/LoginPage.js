class LoginPage{
    getEmailField(){return cy.get("#Email")};
    getPasswordField(){ return cy.get("#Password")}
    checkBoxField(){return cy.get("#RememberMe")}
    getButtonField(){return cy.get(".button-1.login-button")}


}
export default LoginPage