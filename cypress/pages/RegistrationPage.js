class RegistrationPage {
    visit() {
      cy.visit('https://automationexercise.com/signup');
    }
  
    fillName(name) {
      cy.get('[data-qa="signup-name"]').type(name);
    }
  
    fillEmail(email) {
      cy.get('[data-qa="signup-email"]').type(email);
    }
  
    clickSignup() {
      cy.get('[data-qa="signup-button"]').click();
    }
  
    selectGender(gender) {
      if (gender === 'Mr') {
        cy.get('#id_gender1').check();
      } else {
        cy.get('#id_gender2').check();
      }
    }
  
    fillPassword(password) {
      cy.get('[data-qa="password"]').type(password);
    }
  
    selectDOB(day, month, year) {
      cy.get('[data-qa="days"]').select(day);
      cy.get('[data-qa="months"]').select(month);
      cy.get('[data-qa="years"]').select(year);
    }
  
    checkNewsletter() {
      cy.get('#newsletter').check();
    }
  
    checkOffers() {
      cy.get('#optin').check();
    }
  
    fillAddress(details) {
      cy.get('[data-qa="first_name"]').type(details.firstName);
      cy.get('[data-qa="last_name"]').type(details.lastName);
      cy.get('[data-qa="address"]').type(details.address);
      cy.get('[data-qa="state"]').type(details.state);
      cy.get('[data-qa="city"]').type(details.city);
      cy.get('[data-qa="zipcode"]').type(details.zipcode);
      cy.get('[data-qa="mobile_number"]').type(details.mobile);
    }
  
    clickCreateAccount() {
      cy.get('[data-qa="create-account"]').click();
    }
  
    assertAccountCreated() {
      cy.contains('Account Created!').should('be.visible');
    }
  }
  
  export default new RegistrationPage();
  