class LoginPage{
    visit() {
        cy.visit('https://automationexercise.com/login')
    }

    fillEmail(email){
        cy.get('[data-qa="login-email"]').type(email);
    }

    fillPassword(password){
        cy.get('[data-qa="login-password"]').type(password);
    }

    clickLogin(){
        cy.get('[data-qa="login-button"]').click();
    }

    assertError(){
        cy.contains('Your email or password is incorrect!').should('be.visible')
    }
}
export default new LoginPage();