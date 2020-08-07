package com.cucum.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".//Features/Login.feature",
		glue = "com.cucum.stepDefinitions",
		dryRun = false,
		monochrome = true,
		plugin = {"pretty",
				  "html:webpage",
				  "json:report/jsonreport.json"	}
		)
public class TestRunner {


}
