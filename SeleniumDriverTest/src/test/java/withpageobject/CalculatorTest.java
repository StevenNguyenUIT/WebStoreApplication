package withpageobject;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class CalculatorTest {
	private static CalculatorPage page;

	@Before
	public void createWebDriver() {
		// set path to chromedriver.exe
		System.setProperty("webdriver.chrome.driver", "/Users/xhuyen/3_WAA/chromedive/chromedriver-mac-arm64/chromedriver");
		ChromeOptions options = new ChromeOptions();
		options.setBinary("/Users/xhuyen/3_WAA/chromedive/chrome-headless-shell-mac-arm64/chrome-headless-shell");
		options.addArguments("--remote-allow-origins=*");
		// create chrome instance
		WebDriver driver = new ChromeDriver(options);
	    page = PageFactory.initElements(driver, CalculatorPage.class);
	    page.open("http://www.rekenmachine-calculator.nl/");
	  }

	  @AfterClass
	  public static void closeTheBrowser() {
	    page.close();
	  }

	  @Test
	  public void oneAndFour() {
	    page.clickOne();
	    page.clickAdd();
	    page.clickFour();
	    assertThat(page.getResult(),  is("1+4"));
	    page.clickEqual();
	    assertThat(page.getResult(),  is("5"));
	    page.clickClear();
	  }
	@Test
	public void eightSubThree() {
		page.clickEight();
		page.clickSubtract();
		page.clickThree();
		assertThat(page.getResult(),  is("8-3"));
		page.clickEqual();
		assertThat(page.getResult(),  is("5"));
		page.clickClear();
	}

	@Test
	public void fiveMultipleSeven() {
		page.clickFive();
		page.clickMul();
		page.clickSeven();
		assertThat(page.getResult(),  is("5*7"));
		page.clickEqual();
		assertThat(page.getResult(),  is("35"));
		page.clickClear();
	}

	@Test
	public void eightyEightDivideTwo() {
		page.clickEight();
		page.clickEight();
		page.clickDiv();
		page.clickTwo();
		assertThat(page.getResult(),  is("88/2"));
		page.clickEqual();
		assertThat(page.getResult(),  is("44"));
		page.clickClear();
	}

	}