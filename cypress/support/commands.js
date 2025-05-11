// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) =>{
    cy.visit('https://automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
    
})


// cypress/support/commands.js
Cypress.Commands.add('loginViaAPI', () => {
  cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/login', // Your login endpoint
    body: {
      email: 'renishkhadka0@gmail.com',
      password: 'renish'
    }
  }).then((response) => {
    const token = response.body.token;
    window.localStorage.setItem('authToken', token); // or sessionStorage
  });
});


