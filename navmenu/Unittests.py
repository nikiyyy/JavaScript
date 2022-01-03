import unittest
from selenium import webdriver

PATH = "C:\chromedriver.exe"
driver = webdriver.Chrome(PATH)


class TestOP(unittest.TestCase):
    def test_OpenBar_PositiveT_Smoketest(self):
        driver.get("file:///C:/Users/Niki/Documents/GitHub/JavaScript/navmenu/index.html")
        self.assertEqual(driver.find_element_by_xpath('/html/body/ul/li[1]').text,"home")
        
    def test_CloseBar_PositiveT_Smoketest(self):
        driver.get("file:///C:/Users/Niki/Documents/GitHub/JavaScript/navmenu/index.html")
        driver.find_element_by_xpath('//*[@id="button"]').click()
        self.assertNotEqual(driver.find_element_by_xpath('//*[@id="button"]').text,"home")               
                         
if __name__ == "__main__":
    unittest.main()
