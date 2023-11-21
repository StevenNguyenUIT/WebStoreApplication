package calculator;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ResultPage {
    private final WebDriver driver;

    public ResultPage(WebDriver driver) {
        this.driver = driver;
        //init
        PageFactory.initElements(driver, this);
    }

    public void quit() {
        driver.quit();
    }

    @FindBy(tagName = "h1")
    private WebElement data;//h1
    @FindBy(id = "back")
    private WebElement back;//h1

    public String getResult() {
        String s = data.getText();
        return s;
    }
    public void clickBack() {
        back.click();
    }
}
