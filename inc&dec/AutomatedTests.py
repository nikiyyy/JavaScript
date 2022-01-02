import unittest
from selenium import webdriver

PATH = "C:\chromedriver.exe"
driver = webdriver.Chrome(PATH)


class TestOP(unittest.TestCase):
    def test_increment_PositiveT_Smoketest(self):
        driver.get("file:///C:/Users/Niki/Documents/GitHub/JavaScript/inc&dec/index.html")
        driver.find_element_by_xpath('//*[@id="main"]/button[1]').click()
        self.assertEqual(driver.find_element_by_id("number").text,"1")

    def test_decrement_PositiveT_Smoketest(self):
        driver.get("file:///C:/Users/Niki/Documents/GitHub/JavaScript/inc&dec/index.html")
        driver.find_element_by_xpath('//*[@id="main"]/button[2]').click()
        self.assertEqual(driver.find_element_by_id("number").text,"-1")
                         
    def test_reset_PositiveT_Smoketest(self):
        driver.get("file:///C:/Users/Niki/Documents/GitHub/JavaScript/inc&dec/index.html")
        driver.find_element_by_xpath('//*[@id="main"]/button[1]').click()
        driver.find_element_by_xpath('//*[@id="main"]/button[3]').click()
        self.assertEqual(driver.find_element_by_id("number").text,"0")                     
                         
if __name__ == "__main__":
    unittest.main()

