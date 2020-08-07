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
  "duration": 8447849600,
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
  "duration": 3135923900,
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
  "duration": 676694900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 10299450400,
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
  "duration": 152310800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_Log_Out_Button()"
});
formatter.result({
  "duration": 6922648700,
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
  "duration": 10546900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.close_browser()"
});
formatter.result({
  "duration": 1293871400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Successfully Login by driven",
  "description": "",
  "id": "loing-validations;successfully-login-by-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters Email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on Log Out Button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "homePage title should  be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "loing-validations;successfully-login-by-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "loing-validations;successfully-login-by-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 26,
      "id": "loing-validations;successfully-login-by-driven;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin123"
      ],
      "line": 27,
      "id": "loing-validations;successfully-login-by-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Successfully Login by driven",
  "description": "",
  "id": "loing-validations;successfully-login-by-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters Email as \"admin@yourstore.com\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on Log Out Button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "homePage title should  be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_Launch_chrome_browser()"
});
