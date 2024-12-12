import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import massa from '../../../fixtures/example.json';

Given('acesso à página Ticketbox', () => {
    cy.visit(massa.url);
});

And('preencho o formulário com "Teste", "da Silva", "teste@teste.gamil.com"', function (firstName, lastName, email) {
    cy.preencherForm(massa.firstName, massa.lastName, massa.email);
})

And('seleciono {string} em Ticket Quantity, a opcao {string} em Ticket Type e {string} em como conheci o evento', function (quanTicket, TicketType, howHeardAboutUs) {
    cy.preencheOpcoesTicket(quanTicket, TicketType, howHeardAboutUs);
})

And('marco I Agree', () => {
    cy.get("#agree").check();
})

When('clico em Confirm Tickets', () => {
    cy.get('[type="submit"]').click();
})

Then('a compra é confirmada com sucesso', () => {
    cy.get('.success').should('be.visible');
})

When('clico no botão Reset', () => {
    cy.resetButton();
})

Then('todos os campos estão limpos', () => {
    cy.get('#first-name').should('be.empty')
    cy.get('#last-name').should('be.empty')
    cy.get('#email').should('be.empty')
})