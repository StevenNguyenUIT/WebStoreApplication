package fourpages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page3 {

    private final WebDriver driver;

    public Page3(WebDriver driver) {
        this.driver = driver;
        //init
        PageFactory.initElements(driver, this);
    }

    public void quit() {
        driver.quit();
    }

    @FindBy(name = "creditcard")
    private WebElement creditcardInput;
    @FindBy(css = "input[name='type'][value='Visa']")
    private WebElement visaTypeInput;

    @FindBy(tagName = "button")
    private WebElement nextButton;


    public void enterData(String creditcard) {
        creditcardInput.sendKeys(creditcard);
    }
    public void clickVisa() {
        visaTypeInput.click();
    }

    public Page4 clickNext() {
        nextButton.click();
        return new Page4(driver);
    }

}
