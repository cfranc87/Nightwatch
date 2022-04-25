//test di login ko per campi username e password non popolati

module.exports = {
    'Login_ko_usernameEpassword' (browser){
        browser
            //apro sito
            .url(browser.globals.url)
            .waitForElementPresent('xpath', '//div[@class="login_logo"]')

            //clicco su login senza inserire username o pw e verifico fail
            .click('input[name="login-button"]')
            .assert.elementPresent('h3[data-test="error"]', 'errore di login non comparso')

            //inserisco solo username
            .setValue('input[name="user-name"]', browser.globals.username)

            //clicco su login e verifico fail
            .click('input[name="login-button"]')
            .assert.elementPresent('h3[data-test="error"]', 'errore di login non comparso')

            //inserisco solo pw
            .setValue('input[name="user-name"]', ' ')
            .setValue('input[name="password"]', browser.globals.password)

            //clicco su login e verifico fail
            .click('input[name="login-button"]')
            .assert.elementPresent('h3[data-test="error"]', 'errore di login non comparso')

    }



}
