package calculator;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;


import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class TestMyCalculator {
    private MyCalculatorPage calculatorPage;
    private ResultPage resultPage;

    @Before
    public void createWebDriver() {
        // set path to chromedriver.exe
        System.setProperty("webdriver.chrome.driver", "/Users/xhuyen/3_WAA/chromedive/chromedriver-mac-arm64/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.setBinary("/Users/xhuyen/3_WAA/chromedive/chrome-headless-shell-mac-arm64/chrome-headless-shell");
        options.addArguments("--remote-allow-origins=*");
        // create chrome instance
        WebDriver driver = new ChromeDriver(options);
        calculatorPage = PageFactory.initElements(driver, MyCalculatorPage.class);
        calculatorPage.open("http://localhost:3000/");
    }

    @Test
    public void testMyCalculator() {
        calculatorPage.clearData();
        calculatorPage.enterNumbers("5", "3");
         resultPage = calculatorPage.clickAddButton();
        assertThat(resultPage.getResult(), is("8"));
        resultPage.clickBack();

        calculatorPage.clearData();
        calculatorPage.enterNumbers("10", "5");
         resultPage = calculatorPage.clickSubtractButton();
        assertThat(resultPage.getResult(), is("5"));
        resultPage.clickBack();

        calculatorPage.clearData();
        calculatorPage.enterNumbers("4", "6");
         resultPage = calculatorPage.clickMultiplyButton();
        assertThat(resultPage.getResult(), is("24"));
        resultPage.clickBack();
    }

    @After
    public void tearDown() {
        calculatorPage.quit();
        if (resultPage != null) {
            resultPage.quit();
        }
    }
}
