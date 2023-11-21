package nopcommerce;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SuccessPage {
    private final WebDriver driver;

    public SuccessPage(WebDriver driver) {
        this.driver = driver;
        //init
        PageFactory.initElements(driver, this);
    }

    public void quit() {
        driver.quit();
    }

    @FindBy(xpath = "/html/body/div[6]/div[3]/div/div/div/div[2]/div[1]")
    private WebElement data;

    public String getResult() {
        String s = data.getText();
        return s;
    }

}
