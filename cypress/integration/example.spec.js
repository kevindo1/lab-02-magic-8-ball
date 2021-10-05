
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains body tag', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});