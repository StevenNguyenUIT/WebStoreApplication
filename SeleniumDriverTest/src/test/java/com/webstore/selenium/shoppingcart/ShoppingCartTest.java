package com.webstore.selenium.shoppingcart;

import com.webstore.selenium.product.ProductManagementPage;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestMethodOrder;
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

public class ShoppingCartTest {
    WebDriver driver;
    ShoppingPage page1;
    MakeReviewPage page2;
    GotoCardPage page3;
    ProductManagementPage productManagementPage;

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
        page1 = PageFactory.initElements(driver, ShoppingPage.class);
        page1.open("http://localhost:3000/shoppings");
    }

    @Test
    public void testA_BrowseAProductOnShoppingPage() {
        //First goto Product Page then create a product
        productManagementPage = page1.gotoProductManagementPage();//to create product first
        //productManagementPage.waitAndGetResultByName("productNumber");
        productManagementPage.enterData2("P1234567xxx", "Green Banana", "3.5", "Fresh Green Banana 2pounds", "100");
        productManagementPage.clickButtonAdd2();
        productManagementPage.waitAndGetResultAfterThen("messageID");
        //Back to Shopping Page to verify the given product has been created
        page1 = productManagementPage.gotoShoppingPage();
        String inStock = page1.waitAndGetResultAfterThen("P1234567xxx_numberInStockID");
        assertThat(inStock, is("100"));
    }

    @Test
    public void testB_AddToCart() {
        //First goto Product Page then create a product
        productManagementPage = page1.gotoProductManagementPage();//to create product first
        //productManagementPage.waitAndGetResultByName("productNumber");
        productManagementPage.enterData2("P1234567xx1", "Green Banana", "3.5", "Fresh Green Banana 2pounds", "100");
        productManagementPage.clickButtonAdd2();
        productManagementPage.waitAndGetResultAfterThen("messageID");
        //Back to Shopping Page to verify the given product has been created
        page1 = productManagementPage.gotoShoppingPage();
        String inStock = page1.waitAndGetResultAfterThen("P1234567xx1_numberInStockID");
        assertThat(inStock, is("100"));
    }

    @After
    public void tearDown() {
        page1.quit();
        if (page2 != null) {
            page2.quit();
        }
        if (page3 != null) {
            page3.quit();
        }
    }
}
