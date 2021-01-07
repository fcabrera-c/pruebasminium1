Given(/^we visit the "([^"]*)"$/, function(arg1) {
  browser.get("https://bancoq.vepormas.com/ebanking/web/index.html");
  browser.configure().window().maximize();
});

Given(/^we put the good credential of the user$/, function() {
  $("#basic-url").sendKeys("DUARTE65");
  browser.screenshot.asBytes();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(3, timeUnits.SECONDS);
});

Given(/^we click on the button "([^"]*)"$/, function(arg1) {
  $("body > div:nth-child(1) > div > div > div.row.content > div.col-sm-6.col-md-5 > form > div.form-group > button").click();
  expect("Verifica tus iniciales");
});

Given(/^we put the correct password of the user$/, function() {
  $("#password").sendKeys("PWS");
});

Given(/^we click on the button "([^"]*)" and validate the accounts$/, function(arg1) {
  $("body > div:nth-child(1) > div > div > div.row.content > div > div > div > form > div.form-group > button").click();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(10, timeUnits.SECONDS);
  browser.screenshot().saveTo('C:/Users/Anzen/Documents/Minium/loginOK.jpg');
});

Given(/^we select the option "([^"]*)"$/, function(arg1) {
  var timeUnits = require("minium/timeunits");
  $("img").waitTime(15, timeUnits.SECONDS);
  $("#cuentasAc > div.panel-heading > h4 > a > span > div > span").click();
});

Given(/^we click the combo box "([^"]*)" and select the option "([^"]*)"$/, function(arg1, arg2) {
  $("#cuentasAc > div.panel-collapse.in.collapse > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > select").click();
  $("#cuentasAc > div.panel-collapse.in.collapse > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > select option:nth-child(2)").click();
  var timeUnits = require("minium/timeunits");
  $("img").waitTime(10, timeUnits.SECONDS);
});

Given(/^we select a list of account$/, function() {
  $("#typeaheadField").click();
  var timeUnits = require("minium/timeunits");
  $("img").waitTime(3, timeUnits.SECONDS);
});
Given(/^we select the first option of account to transfer$/, function() {
  $("#scrollable-dropdown-menu .ng-scope").click();
  var timeUnits = require("minium/timeunits");
  $("img").waitTime(3, timeUnits.SECONDS);
});
Given(/^we fill the fields to transfer$/, function() {
  $("#container-right-other-bank > div.row.margin-bottom-20 > div > mascara-monto > div.input-group.ng-pristine.ng-untouched.ng-pending.ng-empty > input").sendKeys("4");
  $("#concepto").sendKeys("other accounts");
  var timeUnits = require("minium/timeunits");
  $("img").waitTime(10, timeUnits.SECONDS);
  browser.screenshot().saveTo('C:/Users/Anzen/Documents/Minium/Capturetransf.jpg');
});
Given(/^we click on the button "([^"]*)" to continue$/, function(arg1) {
  $("#cleanForm > div.panel-footer.ng-scope > button").click();
});
Given(/^we capture de the correct "([^"]*)"$/, function(arg1) {
  // Write code here that turns the phrase above into concrete actions
  $("#nw-tkn > input:nth-child(2)").sendKeys("1");
  $("#nw-tkn > input:nth-child(3)").sendKeys("2");
  $("#nw-tkn > input:nth-child(4)").sendKeys("3");
  $("#nw-tkn > input:nth-child(5)").sendKeys("4");
  $("#nw-tkn > input:nth-child(6)").sendKeys("5");
  $("#nw-tkn > input:nth-child(7)").sendKeys("6");
  var timeUnits = require("minium/timeunits");
  $("img").waitTime(3, timeUnits.SECONDS);
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-heading.ng-scope > h3").scrollIntoView();
  browser.screenshot().saveTo('C:/Users/Anzen/Documents/Minium/pageconfirm.jpg');
});

Given(/^we click on the button "([^"]*)" to confirm transaction$/, function(arg1) {
  $("#section-buttons > div > div > div:nth-child(2) > button").click();
});
Given(/^we validate the page of transaction applied with success message$/, function() {
  var timeUnits = require("minium/timeunits");
  $("img").waitTime(10, timeUnits.SECONDS);
  expect($("#bodyApp > div:nth-child(1) > aside > div.panel-heading.ng-scope > h2")).to.exist();
  expect($("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope > div.row.text-center > div > icon-type > img")).to.exist();
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-heading.ng-scope > h3").scrollIntoView();
  browser.screenshot().saveTo('C:/Users/Anzen/Documents/Minium/transactionOk.jpg');
});
//add account
Given(/^we select the menu of transfer$/, function() {
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(10, timeUnits.SECONDS);
  $("#menu > li:nth-child(3) > span > a").click();
});
Given(/^we select the option of "([^"]*)"$/, function(arg1) {
  $("#menu > li:nth-child(3) > span > ul > li:nth-child(8) > a").click();
});
Given(/^we click the option "([^"]*)"$/, function(arg1) {
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > uib-accordion > div > div:nth-child(3) > div.panel-heading > h4 > a > span > span").click();
});
Given(/^we click the option "([^"]*)" to add$/, function(arg1) {
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(10, timeUnits.SECONDS);
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > uib-accordion > div > div.panel.panel-default.panel-open > div.panel-collapse.in.collapse > div > ng-include > div > div:nth-child(1) > div.col-xs-10.col-md-2.col-sm-4 > button").click();
});

Given(/^we fill in the required fields$/, function() {
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(3, timeUnits.SECONDS);
  $("#tipoReg").click();
  $("#tipoReg > option:nth-child(3)").click();
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > form > div.row > div:nth-child(2) > div.col-sm-8 > div:nth-child(2) > div:nth-child(1) > div > div > mascara-telefono > input").sendKeys("5521112546");
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > form > div.row > div:nth-child(2) > div.col-sm-8 > div:nth-child(2) > div.col-xs-12.col-sm-6.col-md-6.form-group.margin-top-20 > mascara-monto > div.input-group.ng-pristine.ng-untouched.ng-pending.ng-empty > input").sendKeys("9000090");
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > form > div.row > div:nth-child(2) > div.col-sm-8 > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(6)").click();
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > form > div.row > div:nth-child(5) > div > div:nth-child(1) > div.col-sm-6.ng-scope > div > input").sendKeys("Martha");
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > form > div.row > div:nth-child(5) > div > div:nth-child(2) > div.col-sm-6.ng-scope > div > input").sendKeys("Ramirez");
  
});

Given(/^we click on the button to go the next page$/, function() {
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > form > div.text-center.panel-footer.ng-isolate-scope > button.btn.btn-success.ng-scope").click();
});
Given(/^we go to the confirm page and capture the "([^"]*)"$/, function(arg1) {
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(5, timeUnits.SECONDS);
  expect($("#bodyApp > div:nth-child(1) > aside > div > div.panel-heading > h2")).to.exist();
  $("#nw-tkn > input:nth-child(2)").sendKeys("1");
  $("#nw-tkn > input:nth-child(3)").sendKeys("2");
  $("#nw-tkn > input:nth-child(4)").sendKeys("3");
  $("#nw-tkn > input:nth-child(5)").sendKeys("4");
  $("#nw-tkn > input:nth-child(6)").sendKeys("5");
  $("#nw-tkn > input:nth-child(7)").sendKeys("6");
  $("#section-buttons > div > div > div:nth-child(2) > button").click();
});

Given(/^we validate the application page$/, function() {
  expect($("#bodyApp > div:nth-child(1) > aside > div > div.panel-heading > h2.color-main > i")).to.exist("¡La operación se efectuó de manera exitosa!");
  expect($("#bodyApp > div:nth-child(1) > aside > div > div.panel.panel-default.border-primary.ng-isolate-scope > div.text-center.panel-footer.ng-scope.ng-isolate-scope > button")).to.exist();
});
Given(/^we finish the transaction with button "([^"]*)"$/, function(arg1) {
  $("#bodyApp > div:nth-child(1) > aside > div > div.panel.panel-default.border-primary.ng-isolate-scope > div.text-center.panel-footer.ng-scope.ng-isolate-scope > button").click();
});
Given(/^we validate the account in the admin-other accounts$/, function() {
  expect($("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-heading.ng-scope > h4")).to.exist();
  $("#bodyApp > div:nth-child(1) > aside > div.panel.panel-default.border-primary.ng-isolate-scope > div.panel-body.ng-scope.ng-isolate-scope > uib-accordion > div > div.panel.panel-default.panel-open > div.panel-heading > h4 > a").scrollIntoView();
  browser.screenshot().saveTo('C:/Users/Anzen/Documents/Minium/Newaccountadded.jpg');
});

//logout
Given(/^click on button "([^"]*)"$/, function(arg1) {
  $("#salir > a > span").click();
});

Then(/^click on button "([^"]*)" and confirm close sesion$/, function(arg1) {
  $("#salir > a > div > div.popover-inner > div > div:nth-child(4) > div.container-fluid > div > div.col-xs-5.no-padding > button").click();
  browser.screenshot().saveTo('C:/Users/Anzen/Documents/Minium/logoutOk.jpg');
});
