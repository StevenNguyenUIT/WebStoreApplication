package nopcommerce;
import calculator.MyCalculatorPage;
import calculator.ResultPage;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;


import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
public class RegisterTest {
    private RegistrationFormPage page;
    private SuccessPage resultPage;

    @Before
    public void createWebDriver() {
        // set path to chromedriver.exe
        System.setProperty("webdriver.chrome.driver", "/Users/xhuyen/3_WAA/chromedive/chromedriver-mac-arm64/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.setBinary("/Users/xhuyen/3_WAA/chromedive/chrome-headless-shell-mac-arm64/chrome-headless-shell");
        options.addArguments("--remote-allow-origins=*");
        // create chrome instance
        WebDriver driver = new ChromeDriver(options);
        page = PageFactory.initElements(driver, RegistrationFormPage.class);
        page.open("https://demo.nopcommerce.com/register");
    }

    @Test
    public void testRegistration() {
        page.enterData("Bob","The Train", createUniqueEmail(), "e7@y66TW2vTRHq");
        resultPage = page.clickRegisterButton();
        assertThat(resultPage.getResult(), is("Your registration completed"));

    }

    @After
    public void tearDown() {
        page.quit();
        if (resultPage != null) {
            resultPage.quit();
        }
    }

    private String createUniqueEmail() {
        String email="@gmail.com";
        String name="frank"+ createRandomNumber();
        return name+email;
    }
    private int createRandomNumber() {
        return (int) (Math.random() * 5000 + 1);
    }
}
