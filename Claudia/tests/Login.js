//test di login ok

module.exports = {
    'Login_ok' (browser) {
        browser
            //apro sito
            .url(browser.globals.url)

            //verifico che ci sia logo e icona
            .waitForElementPresent('xpath', '//div[@class="login_logo"]')
            .assert.elementPresent('div[class="bot_column"]', 'Icona non trovata')

            //inserisco username
            .setValue('input[name="user-name"]', browser.globals.username)

            //inserisco pw
            .setValue('input[name="password"]', browser.globals.password)

            //clicco su login
            .click('input[name="login-button"]')

            //verifico elemento della pagina caricata
            .assert.elementPresent('span[class="title"]', 'login non eseguito correttamente')

    }
}