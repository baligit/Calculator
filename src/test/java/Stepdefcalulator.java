

import net.thucydides.core.annotations.Screenshots;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.net.MalformedURLException;

import static org.assertj.core.api.Assertions.assertThat;



public class Stepdefcalulator {

    private WebDriver driver;
    public Stepdefcalulator() throws MalformedURLException {
        this.driver = setUpdriver.setUpAppium();
    }

    @Given("^I am on the calculator app$")
    public void i_am_on_the_calculator_app() {
    }

    @When("^I click (\\d+)$")
    public void i_click(int arg1) {
        driver.findElement(By.id("bt_02")).sendKeys(String.valueOf(arg1));
    }

    @When("^I click plus$")
    public void i_click_plus() {
        driver.findElement(By.id("Plus")).click();
    }
    @When("^I click equals$")
    public void i_click_equals() {
        driver.findElement(By.id("Gleich")).click();
    }

    @Then("^the result should be (\\d+)$")
    public void the_result_should_be(int arg1){
        int result = Integer.parseInt(driver.findElement(By.id("txtCalc")).getText());
        assertThat(arg1).isEqualTo(result);
    }

}
