describe('Testes de pesquisa e filtro de Busca de Filmes', () => {
  beforeEach(() => {
    cy.visit('https://www.themoviedb.org/movie');
    cy.closeCookieBanner();
  });

  it('Precisão da pesquisa', () => {
    cy.GeneroAnimacao('animacao')
    cy.GeneroMusica('musica');
    cy.GeneroRomance('romance');

    cy.get('.full > p.load_more > .no_click').click();

    cy.get('[src="https://media.themoviedb.org/t/p/w220_and_h330_face/7ACsJLPsXbdnbZspQdWTeKFglqv.jpg"]').click();
    //espera que o elemento title dentro da pagina do filme contenha os generos escolhidos pelo usuário.
    cy.get('.title').should(($el) => {
      const text = $el.text();
      expect(text).to.include('Animação');
      expect(text).to.include('Música');
      expect(text).to.include('Romance');
    });
  });
});

