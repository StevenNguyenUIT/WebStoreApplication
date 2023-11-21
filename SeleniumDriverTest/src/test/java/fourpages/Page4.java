package fourpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page4 {

    private final WebDriver driver;

    public Page4(WebDriver driver) {
        this.driver = driver;
        //init
        PageFactory.initElements(driver, this);
    }

    public void quit() {
        driver.quit();
    }

    @FindBy(xpath = "//*[@id='root']/div/table/tbody/tr[1]/td[2]")
    private WebElement firstName;
    @FindBy(xpath = "//*[@id='root']/div/table/tbody/tr[2]/td[2]")
    private WebElement lastName;
    @FindBy(xpath = "//*[@id='root']/div/table/tbody/tr[3]/td[2]")
    private WebElement profession;
    @FindBy(xpath = "//*[@id='root']/div/table/tbody/tr[6]/td[2]")
    //*[@id="root"]/div/table/tbody/tr[6]/td[2]
    private WebElement state;
    @FindBy(xpath = "//*[@id='root']/div/table/tbody/tr[9]/td[2]")
    private WebElement creditcardtype;

    public String getResult() {
        String s = firstName.getText() + " " + lastName.getText() + " is a " + profession.getText()
                + " in " + state.getText() + " has Credit Card type " + creditcardtype.getText();
        return s;
    }

}
