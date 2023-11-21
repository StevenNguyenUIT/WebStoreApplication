package fourpages;

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

public class MyTest {
    private Page1 page1;
    private Page2 page2;
    private Page3 page3;
    private Page4 page4;

    @Before
    public void createWebDriver() {
        // set path to chromedriver.exe
        System.setProperty("webdriver.chrome.driver", "/Users/xhuyen/3_WAA/chromedive/chromedriver-mac-arm64/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.setBinary("/Users/xhuyen/3_WAA/chromedive/chrome-headless-shell-mac-arm64/chrome-headless-shell");
        options.addArguments("--remote-allow-origins=*");
        // create chrome instance
        WebDriver driver = new ChromeDriver(options);
        page1 = PageFactory.initElements(driver, Page1.class);
        page1.open("http://localhost:3000/");
    }

    @Test
    public void testMyFourPages() {
        page1.enterData("Van Ty", "Pham", "Programmer");
        page2 = page1.clickNext();
        page2.enterData("1000 N 4th ST", "Fairfield", "52557", "Iowa");
        page3 = page2.clickNext();
        page3.enterData("1234567890123456");
        page3.clickVisa();
        page4 = page3.clickNext();
        String expected = "Van Ty Pham is a Programmer in Iowa has Credit Card type Visa";
        assertThat(page4.getResult(), is(expected));
    }

    @After
    public void tearDown() {
        page1.quit();
        if (page2 != null) {
            page2.quit();
        }
        if (page3 != null) {
            page3.quit();
        }
        if (page4 != null) {
            page4.quit();
        }
    }
}
