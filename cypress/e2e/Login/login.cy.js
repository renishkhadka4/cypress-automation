

describe('First Argument describe the following test ',()=>{ //second arugment which returns the value 
    
    it('Login with Invalid Data',()=>{
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="login-email"]')
            .type('test@gmail.com')
        cy.get('[data-qa="login-password"]')
            .type('password123')
        cy.get('[data-qa="login-button"]')
            .click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
    })
})

describe('Login Functionality', () => {
    it('Login with Invalid Data using Fixture', () => {
      cy.fixture('user').then((userData) => {
        const { email, password } = userData.invalidUser;
       cy.login(email, password)
       cy.contains('Your email or password is incorrect!').should('be.visible');
      });
    });
  });
  
// yes lai ajhai advance bhanauuna ko lagi hami k use garxam bhanda kheri 
// commands.json

// yeslai pani jhan ajhai advance bhanauunu paryo vani hami k use garxam vanda POM
// Page object Model
// Praent child relation
// we can directly call here them using after POM and POM chai hami ley yesari test garna mildain

//using POM
import LoginPage from '../../pages/LoginPage';

describe('login using POM', () =>{
    it('should show error message',()=>{
        cy.fixture('user').then((userData)=>{
            const {email, password} = userData.invalidUser
            LoginPage.visit();
            LoginPage.fillEmail(email);
            LoginPage.fillPassword(password);
            LoginPage.clickLogin();
            LoginPage.assertError();
        })
    })
})



 
 


//fixture 
//command js
// login lai POM kasari garni sikey
