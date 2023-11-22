package com.webstore.selenium.order;

import com.webstore.selenium.product.ProductManagementPage;
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

public class OrderManagementTest {
    WebDriver driver;
    OrderPage page1;
    OrderDetailPage page2;

    @Before
    public void createWebDriver() {
        // set path to chromedriver.exe
        System.setProperty("webdriver.chrome.driver", "/Users/xhuyen/3_WAA/chromedive/chromedriver-mac-arm64/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.setBinary("/Users/xhuyen/3_WAA/chromedive/chrome-headless-shell-mac-arm64/chrome-headless-shell");

        // use for Windows
        // System.setProperty("webdriver.chrome.driver", "C:\\tmp\\chromedriver-win64\\chromedriver.exe");
        // options.setBinary("C:\\tmp\\chrome-headless-shell-win64\\chrome-headless-shell.exe");


        options.addArguments("--remote-allow-origins=*");
        // create chrome instance
        driver = new ChromeDriver(options);
        page1 = PageFactory.initElements(driver, OrderPage.class);
        page1.open("http://localhost:3000/orders");
    }
    @After
    public void tearDown() {
        page1.quit();
        if (page2 != null) {
            page2.quit();
        }
    }
}
