describe(`Проверка авторизации`, function() {

    it(`Верный пароль и верный логин`, function() {
        cy.visit(`https://login.qa.studio/`);
        cy.get('#mail').type(`german@dolnikov.ru`);
        cy.get('#pass').type(`iLoveqastudio1`);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains(`Авторизация прошла успешно`);
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

        it(`Проверка логики восстановления пароля:`, function() {
            cy.visit(`https://login.qa.studio/`);
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type(`german@dolnikov.ru`);
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains(`Успешно отправили пароль на e-mail`);
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })  
        it(`Неверный пароль и верный логин`, function() {
            cy.visit(`https://login.qa.studio/`);
            cy.get('#mail').type(`german@dolnikov.ru`);
            cy.get('#pass').type(`iLoveqastudio2`);
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains(`Такого логина или пароля нет`);
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    
        it(`Верный пароль и неверный логин`, function() {
        cy.visit(`https://login.qa.studio/`);
        cy.get('#mail').type(`german@dolnikov123.ru`);
        cy.get('#pass').type(`iLoveqastudio1`);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains(`Такого логина или пароля нет`);
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it(`Проверка валиадции`, function() {
        cy.visit(`https://login.qa.studio/`);
        cy.get('#mail').type(`germandolnikov.ru`);
        cy.get('#pass').type(`iLoveqastudio1`);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains(`Нужно исправить проблему валидации`);
    })
    it(`Проверка на приведение к строчным буквам в логине`, function() {
        cy.visit(`https://login.qa.studio/`);
        cy.get('#mail').type(`GerMan@Dolnikov.ru`);
        cy.get('#pass').type(`iLoveqastudio1`);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains(`Авторизация прошла успешно`);
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
          

    })

    describe('Проверка покупки нового аватара', function () {                
        it('e2e тест на покупку нового аватара для тренера', function () {  
             cy.visit('https://pokemonbattle.ru/');                          
             cy.get('input[id="k_email"]').type('#login');                  
             cy.get('input[id="k_password"]').type('#password');             
             cy.get('button[type="submit"]').click();               
             cy.wait(2000);
             cy.get('.header_card_trainer').click();            
             cy.wait(2000);
             cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); 
             cy.get('.available > button').first().click();   
             cy.get('.card_number').type('4377 7237 6932 7549');                     
             cy.get('.card_csv').type('125');                          
             cy.get('.card_date').type('11/27');                          
             cy.get('.card_name').type('EDUARD ZUBOV');                        
             cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();    
             cy.get('.threeds_number').type('56456');                           
             cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   
             cy.contains('Покупка прошла успешно').should('be.visible');     
         });
     });