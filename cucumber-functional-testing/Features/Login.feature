Feature: Loing Validations

Scenario: Successfully Login with valid Credentials
	Given user Launch chrome browser
	When  user opens URL "https://admin-demo.nopcommerce.com/login" 
	And   user enters Email as "admin@yourstore.com" and password as "admin"
	And   user click on login button
	Then  page title should be "Dashboard / nopCommerce administration"
	When  user click on Log Out Button 
	Then  homePage title should  be "Your store. Login"	
	And   close browser
	
Scenario Outline: Successfully Login by driven
	Given user Launch chrome browser
	When  user opens URL "https://admin-demo.nopcommerce.com/login" 
	And   user enters Email as "<email>" and password as "<password>"
	And   user click on login button
	Then  page title should be "Dashboard / nopCommerce administration"
	When  user click on Log Out Button 
	Then  homePage title should  be "Your store. Login"	
	And   close browser
	
	Examples:
	
		|email|password|
		|admin@yourstore.com|admin|
		|admin@yourstore.com|admin123|