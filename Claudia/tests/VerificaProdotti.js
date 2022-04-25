//test per verificare che la pagina abbia il numero di prodotti desideato

const loginPage = require("./Login.js");


module.exports = {
    before: function (browser) {
        loginPage.Login_ok(browser)
    },
    'VerificaProdotti' (browser){
        browser

            //verifico ci siano tot prodotti
            .expect.elements('div[class="inventory_item"]').count.to.equal(browser.globals.nProdotti)


    }
}

