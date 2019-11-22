require('chromedriver');
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities({
        'browserName': 'chrome'
    })
    .build();

driver.get('http://webdriver.io');
