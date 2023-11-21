package fourpages;

import calculator.ResultPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page2 {

    private final WebDriver driver;

    public Page2(WebDriver driver) {
        this.driver = driver;
        //init
        PageFactory.initElements(driver, this);
    }

    public void quit() {
        driver.quit();
    }

    @FindBy(name = "street")
    private WebElement streetInput;
    @FindBy(name = "city")
    private WebElement cityInput;
    @FindBy(name = "zip")
    private WebElement zipInput;
    @FindBy(name = "state")
    private WebElement stateInput;

    @FindBy(tagName = "button")
    private WebElement nextButton;


    public void enterData(String street, String city, String zip, String state) {
        streetInput.sendKeys(street);
        cityInput.sendKeys(city);
        zipInput.sendKeys(zip);
        stateInput.sendKeys(state);
    }

    public Page3 clickNext() {
        nextButton.click();
        return new Page3(driver);
    }


}
