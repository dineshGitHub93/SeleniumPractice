package com.cucum.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver ldriver;
	
	public LoginPage(WebDriver rdriver) {
		this.ldriver= ldriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(id="Email")
	@CacheLookup
	WebElement txtEmail;
	
	@FindBy(name ="Password")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(xpath ="//input[@value=\"Log in\"]")
	@CacheLookup
	WebElement btnLogin;
	
	@FindBy(linkText ="Logout")
	@CacheLookup
	WebElement lnkLogout;
	
	public void setUserName(String uname) {
		
		txtEmail.clear();
		txtEmail.sendKeys(uname);
	}
	
	public void setPassword(String pwd) {
		
		txtPassword.clear();
		txtPassword.sendKeys(pwd);
	}
	
	public void clickLogin() {
		
		btnLogin.click();
	}
	
	public void clickLogut() {
		
		lnkLogout.click();
		
	}
	

}
