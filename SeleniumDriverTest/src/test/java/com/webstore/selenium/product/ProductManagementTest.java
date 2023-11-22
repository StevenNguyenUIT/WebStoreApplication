package com.webstore.selenium.product;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class ProductManagementTest {
    ProductManagementPage page1;
    ProductDetailPage page2;
    WebDriver driver;

    @Before
    public void createWebDriver() {
        // set path to chromedriver.exe
        System.setProperty("webdriver.chrome.driver", "/Users/xhuyen/3_WAA/chromedive/chromedriver-mac-arm64/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.setBinary("/Users/xhuyen/3_WAA/chromedive/chrome-headless-shell-mac-arm64/chrome-headless-shell");
        options.addArguments("--remote-allow-origins=*");
        // create chrome instance
         driver = new ChromeDriver(options);
        page1 = PageFactory.initElements(driver, ProductManagementPage.class);
        page1.open("http://localhost:3000/products");
    }

    @Test
    public void testAddProduct_P1234567890() {
        page1.enterData("P1234567890", "Green Banana", "3.5",
                "Fresh Green Banana 2pounds", "10");
        driver.findElement(By.id("addBtnID")).click();

        By textLocator = By.id("messageID");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(textLocator));
        element.click();
        //String actual  = page1.getResultAfterAdded();
        assertThat(element.getText(), is("Added successfully!"));


    }

    @Test
    public void testRemoveProduct_P1234567890() {
        //page1.enterData("P1234567890", "Green Banana", "3.5", "Fresh Green Banana 2pounds", "10");
        //page1.clickRemoveButton_P1234567890();
        driver.findElement(By.id("P1234567890_removeID")).click();

        By textLocator = By.id("messageID");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(textLocator));
        element.click();
        //String actual  = page1.getResultAfterAdded();
        assertThat(element.getText(), is("Removed successfully!"));

    }

    @After
    public void tearDown() {
        page1.quit();
        if (page2 != null) {
            page2.quit();
        }
    }

}
