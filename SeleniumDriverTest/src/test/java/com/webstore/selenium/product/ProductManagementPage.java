package com.webstore.selenium.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class ProductManagementPage {
    private WebDriver driver;
    public ProductManagementPage(WebDriver driver) {
        this.driver = driver;
    }
    //quit
    public void quit() {
        this.driver.quit();
    }
    //open
    public void open(String url) {
        this.driver.get(url);
    }
    //fields
    @FindBy(name = "productNumber")
    public WebElement productNumberField; //test with 'P1234567890' as productNumber
    @FindBy(name = "name")
    public WebElement nameField;
    @FindBy(name = "price")
    public WebElement priceField;
    @FindBy(id = "descriptionID")
    public WebElement descriptionField;
    @FindBy(name = "numberInStock")
    public WebElement numberInStockField;
    @FindBy(id = "addBtnID")
    public WebElement addButton;
    //
    @FindBy(id = "searchTextID")
    public WebElement searchTextField;
    @FindBy(id = "searchBtnID")
    public WebElement searchButton;

    @FindBy(id = "messageID")
    public WebElement messageText;

    public void enterData(String productNumber, String name, String price, String description, String num) {
        this.productNumberField.sendKeys(productNumber);
        this.nameField.sendKeys(name);
        this.priceField.sendKeys(price);
        this.descriptionField.sendKeys(description);
        this.numberInStockField.sendKeys(num);
    }
    public void clickButtonAdd() {
        this.addButton.click();
    }
    public String waitAndGetResultAfterAdded() {
        By textLocator = By.id("messageID");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(textLocator));
        element.click();
        return element.getText();
    }
    public void clickById(String componentId) {
        driver.findElement(By.id(componentId)).click();
    }
    public ProductDetailPage clickDetailButtonById(String componentId) {
        driver.findElement(By.id(componentId)).click();
        return new ProductDetailPage(this.driver);
    }

}
