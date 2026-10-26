import { it } from 'mocha';

describe('search-user', () => {
  let data: { TestURL: string };
  let accountData: { StandardAccount: string; StandardAccountPass: string };
  const targetUsername = 'Spidy400'; // Type the map you want to find
  before(function () {
    cy.fixture('personal-automation-account.json').then((fdata) => {
      accountData = fdata;
    });

    cy.fixture('setup-data').then((fdata) => {
      data = fdata;
      cy.visit(data.TestURL);
    });
  });

  it('Users can search for users using the Community -> Search Users UI', function () {
    // Step 1: Login
    cy.loginFrontend(accountData.StandardAccount, accountData.StandardAccountPass);

    // Step 2: Search Users 
    cy.visit(data.TestURL + 'users.php');
    cy.get('#search-text').type(targetUsername); // Type in the target username
    //cy.get('input[value="Search"]').click(); // Search button

    // Step 3: Click on Target Username (loads profile)
    //cy.contains('#main a', new RegExp(`^${Cypress._.escapeRegExp(targetUsername)}$`)).click();

    // User profile loaded is the same as the one that was typed in by the user
    //cy.get('#game-header-table > div.bold.underline.game-header-header > b > a')
    //  .invoke('text')
    //  .should('equal', targetUsername);
  });
});
