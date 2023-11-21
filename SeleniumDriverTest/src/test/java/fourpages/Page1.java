package fourpages;

import calculator.ResultPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Page1 {
    private final WebDriver driver;


    public Page1(WebDriver driver) {
        this.driver = driver;
    }

    public void open(String url) {
        driver.get(url);
    }

    public void quit() {
        driver.quit();
    }


    @FindBy(name = "firstName")
    private WebElement firstNameInput;
    @FindBy(name = "lastName")
    private WebElement lastNameInput;
    @FindBy(name = "profession")
    private WebElement professionInput;
    @FindBy(tagName = "button")
    private WebElement nextButton;


    public void enterData(String firstName, String lastName, String profession) {
        firstNameInput.sendKeys(firstName);
        lastNameInput.sendKeys(lastName);
        professionInput.sendKeys(profession);
    }

    public Page2 clickNext() {
        nextButton.click();
        return new Page2(driver);
    }
}
