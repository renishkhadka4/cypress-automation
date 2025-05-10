
import LoginPage from '../../pages/LoginPage';

describe('Login Flow with API Intercept', () => {
    it('should intercept login request and verify failure', () => {
        // Intercept any POST request to login endpoint
        cy.fixture('user').then((userData) => {
            const { email, password } = userData.invalidUser
            cy.intercept('POST', '**/login', (req) => {
                console.log('Login request captured:', req);
            }).as('loginRequest');

            // Go to login page
            LoginPage.visit()
            // Fill invalid credentials
            LoginPage.fillEmail(email);
            LoginPage.fillPassword(password);
            LoginPage.clickLogin();

            // Wait for intercepted request
            cy.wait('@loginRequest');
            // Check error message on UI
            LoginPage.assertError();
        })
    });
});



