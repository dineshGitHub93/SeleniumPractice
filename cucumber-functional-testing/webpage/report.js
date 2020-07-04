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
  "duration": 8847303700,
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
  "duration": 3583927500,
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
  "duration": 465756600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 13923312800,
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
  "duration": 126939700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_Log_Out_Button()"
});
formatter.result({
  "duration": 5626282700,
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
  "duration": 13122500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.close_browser()"
});
formatter.result({
  "duration": 804733700,
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
formatter.result({
  "duration": 6162942900,
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
  "duration": 3060321300,
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
  "duration": 502017200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 13590945700,
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
  "duration": 81813500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_Log_Out_Button()"
});
formatter.result({
  "duration": 5809315200,
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
  "duration": 10659400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.close_browser()"
});
formatter.result({
  "duration": 785261400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successfully Login by driven",
  "description": "",
  "id": "loing-validations;successfully-login-by-driven;;3",
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
  "name": "user enters Email as \"admin@yourstore.com\" and password as \"admin123\"",
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
formatter.result({
  "duration": 5915428300,
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
  "duration": 1797313200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin123",
      "offset": 60
    }
  ],
  "location": "LoginPageStepDefinitions.user_enters_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 571237800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 782651200,
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
  "duration": 288609300,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.cucum.stepDefinitions.LoginPageStepDefinitions.page_title_should_be(LoginPageStepDefinitions.java:47)\r\n\tat ✽.Then page title should be \"Dashboard / nopCommerce administration\"(./Features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_click_on_Log_Out_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefinitions.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});