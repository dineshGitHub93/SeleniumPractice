Feature: Customers

Scenario Outline: Add new Customer	
	Given user Launch chrome browser
	When  user opens URL "https://admin-demo.nopcommerce.com/login" 
	And   user enters Email as "<email>" and password as "<password>"
	And   user click on login button
	Then  user can view Dashboard
	When  user click on Customer Menu
	And   click on customers menu Item	
	And   click on Add new button
	Then  user can view Add new customer page
	When  user enter customer info
	And   click on save button
	Then  user can view confirmation message "The new customer has been added successfully."
	And   close browser 	
	
	Examples:
	
		|email|password|
		|admin@yourstore.com|admin|
