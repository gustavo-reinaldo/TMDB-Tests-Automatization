describe('Teste da Funcionalidade de Filmes Favoritos', () => {

    it('Adicionar filme aos Favoritos(usuário não fez login)', () => {
      cy.visit('https://www.themoviedb.org/movie');
      cy.closeCookieBanner();
      //selecionar o filme e adicionar ele a watchlist.
      cy.get(':nth-child(1) > .content > h2 > a').click();
      //clicar no botão de salvar para a watchlist.
      cy.get('#watchlist > .glyphicons_v2').click();
      //espera que contenha o retorno de uma mensagem dizendo para fazer login
      cy.get('.k-tooltip-content').contains('Faça Login para adicionar este filme à sua lista de interesses').should('be.visible');
    });
  
    it('Adicionar filme aos Favoritos(usuário fez login)', () => {
      cy.visit('https://www.themoviedb.org/login');
      cy.login('', '');
      cy.closeCookieBanner();
      //passar o mouse por cima do elemento
      cy.get('.dropdown_menu > :nth-child(1) > .no_click').trigger('mouseover');
      //clicar no elemento que aparece dentro do dropdown
      cy.get('.k-animation-container > .k-group > .k-first > .k-link').click();
  
      //selecionar o filme e adicionar ele a watchlist.  
      cy.get(':nth-child(1) > .content > h2 > a').click();
      //clicar no botão de salvar para a watchlist.
      cy.get('#watchlist > .glyphicons_v2').click();
      //clicar no botão do avatar para aparecer o menu
      cy.get('.no_click > .avatar').click();
      //clicar no botão que da acesso à watchlist
      cy.get('.k-tooltip-content > .settings_content > :nth-child(2) > :nth-child(4) > a').should('be.visible').click({ force: true });
      //verificar dentro da watchlist se o filme escolhido foi salvo.
      cy.get('.title h2').contains('Godzilla e Kong: O Novo Império').should('be.visible');
    });
  });