$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Loing Validations",
  "description": "",
  "id": "loing-validations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successfully Login with valid Credentials",
  "description": "",
  "id": "loing-validations;successfully-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on Log Out Button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "homePage title should  be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 21922862600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "LoginPageStepDefinitions.user_opens_URL(String)"
});
formatter.result({
  "duration": 4790773600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "LoginPageStepDefinitions.user_enters_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 1514177700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 11514841800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDefinitions.page_title_should_be(String)"
});
formatter.result({
  "duration": 425791000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_Log_Out_Button()"
});
formatter.result({
  "duration": 8072269100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 27
    }
  ],
  "location": "LoginPageStepDefinitions.homepage_title_should_be(String)"
});
formatter.result({
  "duration": 22731300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.close_browser()"
});
formatter.result({
  "duration": 1969741700,
  "status": "passed"
});
});