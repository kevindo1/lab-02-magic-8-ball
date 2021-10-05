
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('user-interaction', ()=>{   
        it('user clicks submit button', ()=>{
            cy.get('#submit-button').click();
            cy.get('#output-answer').should('be.visible');
        });
    });

    describe('squidward-checkbox', ()=>{   
        it('user checks box', ()=>{
            cy.get('#squidward').click();
            cy.get('#submit-button').click();
            cy.get('#output-answer').should('have.text', 'No');
        });
    });
});