import unittest
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException     

PATH = "C:\chromedriver.exe"
driver = webdriver.Chrome(PATH)


class TestOP(unittest.TestCase):
    def test_AddTask_PositiveT_Smoketest(self):
        driver.get("file:///C:/Users/Niki/Documents/GitHub/JavaScript/JSTodoList/index.html")
        driver.find_element_by_id("input").send_keys("test123")
        driver.find_element_by_id("button").click()
        self.assertEqual(driver.find_element_by_id("task-0").text,"test123 ðŸ—‘ï¸\x8f")
    
    def test_DeleteTask_PositiveT_Smoketest(self):
        driver.get("file:///C:/Users/Niki/Documents/GitHub/JavaScript/JSTodoList/index.html")
        driver.find_element_by_id("input").send_keys("test123")
        driver.find_element_by_id("button").click()
        driver.find_element_by_css_selector(".DelButton").click()
        try:
            driver.find_element_by_id("task-0")
        except NoSuchElementException:
           self.assertTrue(True)
                         
if __name__ == "__main__":
    unittest.main()

