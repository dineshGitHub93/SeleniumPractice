package com.cucum.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddCustomerPage {
	

	public WebDriver driver;
	
	public AddCustomerPage(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
// WebElements of Customers Page
	By lnkCustomers_menu=By.xpath("//a[@href='#']//span[contains(text(),'Customers')]");
	By lnkCustomers_menuItem = By.xpath("//a[@href='/Admin/Customer/List']//span[contains(text(),'Customers')]");
	By btnAddnew = By.xpath("//a[@class='btn bg-blue']");
	By txtEmail = By.xpath("//input[@id='Email']");
	By txtPassword = By.xpath("//input[@id='Password']");
	By txtFirstName = By.xpath("//input[@id='FirstName']");
	By txtLastName = By.xpath("//input[@id='LastName']");
	By rdMGender = By.xpath("//input[@id='Gender_Male']");
	By rdFGender = By.xpath("//input[@id='Gender_Female']");
	By txtDOB = By.xpath("//input[@id='DateOfBirth']");
	By txtCompany = By.xpath("//input[@id='Company']");
	By txtManagerofVendor = By.xpath("VendorId");
	By chkIstheexampt = By.xpath("//input[@id='IsTaxExempt']");
	By txtipAdminCommit = By.xpath("//input[@id='AdminComment']");
	By txtCustomerrole = By.xpath("//div[@class='k-multiselect-wrap k-floatwrap']");
	By listItemAdministator = By.xpath("//li[contains(text(),'Administrators')]");
	By listItemForumModerators =By.xpath("//li[contains(text(),'Forum Moderators')]");
	By listItemGuests = By.xpath("//li[contains(text(),'Guests')]");
	By listItemRegistered =  By.xpath("//li[contains(text(),'Registered')]");
	By listItemVendors = By.xpath("//li[contains(text(),'Vendors')]");
	By btnSave= By.xpath("//button[@name='save']");
			
}
