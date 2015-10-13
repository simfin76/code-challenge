'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Code Challenge App', function() {

  describe('Data list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });
      
    it('should have a title', function() {
    browser.get('http://localhost:8000/app/index.html');

    expect(browser.getTitle()).toEqual('Angular SPA Code Challange CUBEYOU');
  });


    it('should filter the data in datalist into the search box', function() {

      var dataList = element.all(by.repeater('data in datalist'));
      var search = element(by.model('search'));

      expect(dataList.count()).toBe(3);

      var firstdatapag = element(by.repeater('data in datalist').row(0).column('data.name'));
      expect(firstdatapag.getText()).toEqual('Family Guy');
      var lastdatapag = element(by.repeater('data in datalist').row(2).column('data.name'));
      expect(lastdatapag.getText()).toEqual('Family Feud');
              
      search.sendKeys('Feud');
      expect(dataList.count()).toBe(1);
      var firstdatapag = element(by.repeater('data in datalist').row(0).column('data.name'));
      expect(firstdatapag.getText()).toEqual('Family Feud');

      search.clear();
      search.sendKeys('ABC');
      expect(dataList.count()).toBe(1);
            
      search.clear();
      search.sendKeys('Family');
      expect(dataList.count()).toBe(3);
      var firstdatapag = element(by.repeater('data in datalist').row(0).column('data.name'));
      expect(firstdatapag.getText()).toEqual('Family Guy');
   
    }); 
      
  /*   it('should be possible to control phone order via the drop down select box', function() {

      var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      var query = element(by.model('query'));

      function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Motorola XOOM with Wi-Fi",
        "MOTOROLA XOOM"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "MOTOROLA XOOM",
        "Motorola XOOM with Wi-Fi"
      ]);
    }); */
  });
});


