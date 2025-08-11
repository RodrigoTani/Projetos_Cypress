const hoje = new Date()
const doisMesesDepois = new Date(hoje.setMonth(hoje.getMonth() + 2))

const dia = String(doisMesesDepois.getDate()).padStart(2, '0')
const mes = String(doisMesesDepois.getMonth() + 1).padStart(2, '0') // Janeiro é 0
const ano = doisMesesDepois.getFullYear()
const dataFormatada = `${mes}/${dia}/${ano}`

describe('Modelo automação Cypress', () => {
  describe('Trycents Automobile', () => {
    
    it('Dado que eu esteja na tela', () => {
      cy.visit('/')
      cy.get('#nav_automobile').click()
      cy.get('#make').should('exist')
      cy.screenshot('01-tela-inicial') // print da tela inicial com menu aberto
    });

    it('Quando eu preencher o formulário Enter Vehicle Data', () => {
      cy.get('#make').select('Ford')
      cy.get('#engineperformance').type('2000')
      cy.get('#dateofmanufacture').type('01/01/2020')
      cy.get('#numberofseats').select('4')
      cy.get('#fuel').select('Gas')
      cy.get('#listprice').type('30000')
      cy.get('#licenseplatenumber').type('ABC1234')
      cy.get('#annualmileage').type('15000')
      
      cy.screenshot('02-vehicle-data-preenchido') // print após preencher veículo
      
      cy.get('#nextenterinsurantdata').click()
    });

    it('E eu preencher o formulário Enter Insurant Data', () => {
      cy.get('#firstname').type('John')
      cy.get('#lastname').type('Doe')
      cy.get('#birthdate').type('01/01/1990')
      cy.get('#gendermale').check({ force: true })
      cy.get('#streetaddress').type('123 Main St')
      cy.get('#country').select('United States')
      cy.get('#zipcode').type('12345')
      cy.get('#city').type('New York')
      cy.get('#occupation').select('Employee')
      cy.get('#bungeejumping').check({ force: true })
      cy.get('#website').type('https://example.com')
      cy.get('#picturecontainer').attachFile('car.webp', { force: true })
      
      cy.screenshot('03-insurant-data-preenchido') // print após preencher segurado
      
      cy.get('#nextenterproductdata').click()
    });

    it('E eu preencher o formulário Enter Product Data', () => {
      cy.get('#startdate').type(dataFormatada)
      cy.get('#insurancesum').select('20000000')
      cy.get('#meritrating').select('Bonus 1')
      cy.get('#damageinsurance').select('Full Coverage')
      cy.get('#EuroProtection').check({ force: true })
      cy.get('#courtesycar').select('Yes')
      
      cy.screenshot('04-product-data-preenchido') // print após preencher produto
      
      cy.get('#nextselectpriceoption').click()
    });

    it('E eu preencher o formulário Select Price Option', () => {
      cy.get('#selectsilver').check({ force: true })
      
      cy.screenshot('05-price-option-preenchido') // print após selecionar preço
      
      cy.get('#nextsendquote').click()
    });

    it('E eu preencher o formulário Send Quote', () => {
      cy.fixture('person_data.json').then((dados) => {
        cy.get('#email').type(dados.email)
        cy.get('#phone').type(dados.phone)
        cy.get('#username').type(dados.Username)
        cy.get('#password').type(dados.password)
        cy.get('#confirmpassword').type(dados.passwordConfirmation)
        cy.get('#Comments').type(dados.comments)
        
        cy.screenshot('06-send-quote-preenchido') // print antes de enviar
        
        cy.get('#sendemail').click()
      })
    });

    it('Então eu vejo a mensagem de sucesso', () => {
      cy.get('.sweet-alert h2', { timeout: 10000 }).should('contain.text', 'Sending e-mail success!')
      
      cy.screenshot('07-mensagem-sucesso') // print da mensagem de sucesso
      
      cy.get('.sweet-alert button.confirm').click()
    });
  });
});