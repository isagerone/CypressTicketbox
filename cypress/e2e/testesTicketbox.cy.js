import massa from '../fixtures/example.json';
import '../support/commands';

describe('Testes na página Ticketbox', () => {
  beforeEach(() => {
    cy.visit(massa.url)
  })

  it('CT01: Compra de 1 ticket do tipo General Admission usando a opção Friend', () => {
    cy.preencherForm(massa.firstName, massa.lastName, massa.email);
    cy.preencheOpcoesTicket('1', '#general', '#friend');
    cy.confirmaTicket();
  })

  it('CT02: Compra de 2 ticket do tipo VIP usando a opção Publication', () => {
    cy.preencherForm(massa.firstName, massa.lastName, massa.email);
    cy.preencheOpcoesTicket('2', '#vip', '#publication');
    cy.confirmaTicket();
  })

  it('CT03: Compra de 3 ticket do tipo VIP usando a opção Social Media', () => {
    cy.preencherForm(massa.firstName, massa.lastName, massa.email);
    cy.preencheOpcoesTicket('3', '#vip', '#social-media');
    cy.confirmaTicket();
  })

  it('CT04: Compra de 4 ticket do tipo General Admission usando a opção Publication', () => {
    cy.preencherForm(massa.firstName, massa.lastName, massa.email);
    cy.preencheOpcoesTicket('4', '#general', '#publication');
    cy.confirmaTicket();
  })

  it('CT05: Validar Funcionamento do Botao Reset', () => {
    cy.preencherForm(massa.firstName, massa.lastName, massa.email);
    cy.preencheOpcoesTicket('1', '#general', '#friend');
    cy.resetButton();
  })

})

