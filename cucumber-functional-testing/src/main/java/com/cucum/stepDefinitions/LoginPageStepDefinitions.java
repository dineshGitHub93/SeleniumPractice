package com.cucum.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucum.pageObjects.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginPageStepDefinitions {
	
	public WebDriver driver;
	public LoginPage lp;
	
	@Given("^user Launch chrome browser$")
	public void user_Launch_chrome_browser() throws Throwable {

		System.setProperty("webdriver.chrome.driver", ".//Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		lp=new LoginPage(driver);
	}

	@When("^user opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		driver.get(url);
	}

	@When("^user enters Email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_password_as(String email, String password) throws Throwable {
		lp.setUserName(email);
		lp.setPassword(password);
	}

	@When("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		lp.clickLogin();
	}

	@Then("^page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String pagetitle) throws Throwable {
		if(driver.getPageSource().contains("Login was unsuccessful.")) {
			driver.close();
			Assert.assertTrue(false);
		}else
		{
			Assert.assertEquals(pagetitle, driver.getTitle());
		}
	}

	@When("^user click on Log Out Button$")
	public void user_click_on_Log_Out_Button() throws Throwable {

		lp.clickLogut();
		Thread.sleep(3000);

	}

	@Then("^homePage title should  be \"([^\"]*)\"$")
	public void homepage_title_should_be(String pagetitle) throws Throwable {
		Assert.assertEquals(pagetitle, driver.getTitle());
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		driver.quit();
	}


	
	}
