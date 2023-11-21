package nopcommerce;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegistrationFormPage {
    private final WebDriver driver;


    public RegistrationFormPage(WebDriver driver) {
        this.driver = driver;
    }

    public void open(String url) {
        driver.get(url);
    }

    public void quit() {
        driver.quit();
    }

    @FindBy(id = "FirstName")
    private WebElement firstNameInput;
    @FindBy(id = "LastName")
    private WebElement lastNameInput;
    @FindBy(id = "Email")
    private WebElement emailInput;
    @FindBy(id = "Password")
    private WebElement passwordInput1;
    @FindBy(id = "ConfirmPassword")
    private WebElement passwordInput2;

    @FindBy(id = "register-button")
    private WebElement registerButton;



    public void enterData(String firstName, String lastName, String email, String password) {
        firstNameInput.sendKeys(firstName);
        lastNameInput.sendKeys(lastName);
        emailInput.sendKeys(email);
        passwordInput1.sendKeys(password);
        passwordInput2.sendKeys(password);
    }
    public SuccessPage clickRegisterButton() {
        registerButton.click();
        return new SuccessPage(driver);
    }


}
