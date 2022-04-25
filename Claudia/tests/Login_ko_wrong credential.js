//test di login ko per campi username e password popolati erroneamente

module.exports = {
    'Login_ko_usernameEpassword' (browser){
        browser
            //apro sito
            .url(browser.globals.url)
            .waitForElementPresent('xpath', '//div[@class="login_logo"]')


            //inserisco username errata e pw corretta
            .setValue('input[name="user-name"]', 'pippo')
            .setValue('input[name="password"]', browser.globals.password)

            //clicco su login e verifico fail
            .click('input[name="login-button"]')
            .assert.elementPresent('h3[data-test="error"]', 'errore di login non comparso')

            //inserisco username corretta e pw sbagliata
            .setValue('input[name="user-name"]', browser.globals.username)
            .setValue('input[name="password"]', 'pippo')

            //clicco su login e verifico fail
            .click('input[name="login-button"]')
            .assert.elementPresent('h3[data-test="error"]', 'errore di login non comparso')

    }


}