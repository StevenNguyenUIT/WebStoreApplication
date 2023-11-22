package com.webstore.selenium.product;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductDetailPage {
    WebDriver driver;
    public ProductDetailPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public void quit() {
        this.driver.quit();
    }
    //fields
    @FindBy(id = "productNumberTextID")
    public WebElement textProductNumber;

    public String getProductNumberDisplay() {
        return textProductNumber.getText();
    }


}
