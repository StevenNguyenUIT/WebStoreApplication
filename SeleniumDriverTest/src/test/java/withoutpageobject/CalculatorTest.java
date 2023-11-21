package withoutpageobject;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;


public class CalculatorTest {
	private WebDriver driver;

	@Before
	public void createWebDriver() {
		System.setProperty("webdriver.chrome.driver", "/Users/xhuyen/3_WAA/chromedive/chromedriver-mac-arm64/chromedriver");
		ChromeOptions options = new ChromeOptions();
		options.setBinary("/Users/xhuyen/3_WAA/chromedive/chrome-headless-shell-mac-arm64/chrome-headless-shell");
		options.addArguments("--remote-allow-origins=*");
		// create chrome instance
		driver = new ChromeDriver(options);
	}

	@After
	public void closeWebDriver() {
		driver.quit();
	}

	@Test
	public void oneAndFour() {
		driver.navigate().to("http://www.rekenmachine-calculator.nl/");

		WebElement button = driver.findElement(By.name("one"));
		button.click();
		button = driver.findElement(By.name("add"));
		button.click();
		button = driver.findElement(By.name("four"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("1+4"));
		button = driver.findElement(By.name("equal"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("5"));
	}

	@Test
	public void oneAndSix() {
		driver.navigate().to("http://www.rekenmachine-calculator.nl/");

		WebElement button = driver.findElement(By.name("one"));
		button.click();
		button = driver.findElement(By.name("add"));
		button.click();
		button = driver.findElement(By.name("six"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("1+6"));
		button = driver.findElement(By.name("equal"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("7"));
	}

	@Test
	public void eightSubThree() {
		driver.navigate().to("http://www.rekenmachine-calculator.nl/");

		WebElement button = driver.findElement(By.name("eight"));
		button.click();
		button = driver.findElement(By.name("sub"));
		button.click();
		button = driver.findElement(By.name("three"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("8-3"));
		button = driver.findElement(By.name("equal"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("5"));
	}

	@Test
	public void fiveMultipleSeven() {
		driver.navigate().to("http://www.rekenmachine-calculator.nl/");

		WebElement button = driver.findElement(By.name("five"));
		button.click();
		button = driver.findElement(By.name("mul"));
		button.click();
		button = driver.findElement(By.name("seven"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("5*7"));
		button = driver.findElement(By.name("equal"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("35"));
	}

	@Test
	public void eightyEightDivideTwo() {
		driver.navigate().to("http://www.rekenmachine-calculator.nl/");

		WebElement button = driver.findElement(By.name("eight"));
		button.click();
		 button = driver.findElement(By.name("eight"));
		button.click();
		button = driver.findElement(By.name("div"));
		button.click();
		button = driver.findElement(By.name("two"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("88/2"));
		button = driver.findElement(By.name("equal"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("44"));
	}


}
