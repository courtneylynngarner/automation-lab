const { TestScheduler } = require("@jest/core");
const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get(
    "http://localhost:5500/exercises/automation/movieList/index.html"
  );
});

afterAll(async () => {
  await driver.quit();
});

describe("adding and crossing off movies", async () => {
  TestScheduler("Add movie to list", async () => {
    const input = await driver.findElement(By.xpath("//form/input"));

    await input.sendKeys("Wonder Woman\n");

    await driver.sleep(4000);
  });

  test("Cross movie off list", async () => {
    const crossingOff = await driver.findElement(By.xpath("//li/button"));

    await crossingOff.click();

    await driver.sleep(4000);
  });
});
