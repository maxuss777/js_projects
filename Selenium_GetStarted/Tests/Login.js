
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://employees.staging.dbbest.com/Authorization/Logon');
driver.findElement(By.id('Username')).sendKeys('teamlead.t');
driver.findElement(By.id('Password')).sendKeys(1);
driver.findElement(By.id('submitBtn')).click();

driver.quit();