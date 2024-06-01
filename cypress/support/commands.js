// Comando para fechar o banner de cookies
Cypress.Commands.add('closeCookieBanner', () => {
    cy.get('[class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon"]').click();
  });

// Comando para selecionar gêneros
Cypress.Commands.add('selectGenre', (genre) => {
    cy.get(`[data-genre="${genre}"]`).click();
  });

//comando para realigar login
Cypress.Commands.add('login', (username, password) => {
    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('input[id="login_button"]').click();
});


//commands para selecionar os generos para o teste
Cypress.Commands.add('GeneroAnimacao', (animacao) => {
    cy.get('#with_genres > [data-value="16"] > .no_click').type(animacao);
});
    
Cypress.Commands.add('GeneroAventura', (aventura) => {
    cy.get('#with_genres > [data-value="12"] > .no_click').type(aventura);
});
    
Cypress.Commands.add('GeneroAcao', (acao) => {
    cy.get('[data-value="28"] > .no_click').type(acao);
});

Cypress.Commands.add('GeneroCinemaTv', (cinematv) => {
    cy.get('[data-value="10770"] > .no_click').type(cinematv);
});

Cypress.Commands.add('GeneroComedia', (comedia) => {
    cy.get('[data-value="35"] > .no_click').type(comedia);
});

Cypress.Commands.add('GeneroCrime', (crime) => {
    cy.get('[data-value="80"] > .no_click').type(crime);
});

Cypress.Commands.add('GeneroDocumentario', (documentario) => {
    cy.get('[data-value="99"] > .no_click').type(documentario);
});

Cypress.Commands.add('GeneroDrama', (drama) => {
    cy.get('#with_genres > [data-value="18"] > .no_click').type(drama);
});

Cypress.Commands.add('GeneroFamilia', (familia) => {
    cy.get('[data-value="10751"] > .no_click').type(familia);
});

Cypress.Commands.add('GeneroFantasia', (fantasia) => {
    cy.get('#with_genres > [data-value="14"] > .no_click').type(fantasia);
});

Cypress.Commands.add('GeneroFaroeste', (faroeste) => {
    cy.get('[data-value="37"] > .no_click').type(faroeste);
});

Cypress.Commands.add('GeneroFiccaoCientifica', (ficcaocientifica) => {
    cy.get('[data-value="878"] > .no_click').type(ficcaocientifica);
});

Cypress.Commands.add('GeneroGuerra', (guerra) => {
    cy.get('[data-value="10752"] > .no_click').type(guerra);
});
    
Cypress.Commands.add('GeneroHistoria', (historia) => {
    cy.get('[data-value="36"] > .no_click').type(historia);
});

Cypress.Commands.add('GeneroMisterio', (misterio) => {
    cy.get('[data-value="9648"] > .no_click').type(misterio);
});

Cypress.Commands.add('GeneroMusica', (musica) => {
    cy.get('[data-value="10402"] > .no_click').type(musica);
});

Cypress.Commands.add('GeneroRomance', (romance) => {
    cy.get('[data-value="10749"] > .no_click').type(romance);
});

Cypress.Commands.add('GeneroTerror', (terror) => {
    cy.get('[data-value="27"] > .no_click').type(terror);
});

Cypress.Commands.add('GeneroThriller', (thriller) => {
    cy.get('[data-value="53"] > .no_click').type(thriller);
});


    
