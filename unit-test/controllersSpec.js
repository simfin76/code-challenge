'use strict';

/* jasmine specs for controllers go here */


describe('Code Challange controllers', function() {

  describe('listdata', function(){
    var scope, ctrl;

    beforeEach(module('CodeChallenge'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('listdata', {$scope:scope});
            scope.datalist = [];
            scope.datalist = [{
                    "id": 24609282673,
                    "name": "Family Guy",
                    "reach": "0.12",
                    "trends": "0.034"
                    },
                    {
                    "id": 130577231135,
                    "name": "Modern Family",
                    "reach": "0.0932",
                    "trends": "0.0344"
                    },
                    {
                    "id": 164755026965971,
                    "name": "Family Feud",
                    "reach": "0.08534",
                    "trends": "0.0453"
                    },
                    {
                    "id": 31092164580,
                    "name": "ABC Family's 25 Days of Christmas",
                    "reach": "0.06523",
                    "trends": "-0.021"
                    },
                    {
                    "id": 104046419630897,
                    "name": "Family",
                    "reach": "0.4334",
                    "trends": "0.234"
                    },
                    {
                    "id": 103280435790,
                    "name": "Awkward Family Photos",
                    "reach": "0.12",
                    "trends": "-0.154"
                    }];
    }));
    
    it('should create "datalist" with 6 elements', function() {
   
       expect(scope.datalist.length).not.toBe(null); 
       expect(scope.datalist.length).toEqual(6);
       expect(scope.datalist).toEqual([{
                    "id": 24609282673,
                    "name": "Family Guy",
                    "reach": "0.12",
                    "trends": "0.034"
                    },
                    {
                    "id": 130577231135,
                    "name": "Modern Family",
                    "reach": "0.0932",
                    "trends": "0.0344"
                    },
                    {
                    "id": 164755026965971,
                    "name": "Family Feud",
                    "reach": "0.08534",
                    "trends": "0.0453"
                    },
                    {
                    "id": 31092164580,
                    "name": "ABC Family's 25 Days of Christmas",
                    "reach": "0.06523",
                    "trends": "-0.021"
                    },
                    {
                    "id": 104046419630897,
                    "name": "Family",
                    "reach": "0.4334",
                    "trends": "0.234"
                    },
                    {
                    "id": 103280435790,
                    "name": "Awkward Family Photos",
                    "reach": "0.12",
                    "trends": "-0.154"
                    }]);
        
         });
        
      it('should remove data from "datalist"', function() {          
       scope.remove();
       expect(scope.datalist.length).toEqual(5);
       expect(scope.datalist).toEqual([{
                    "id": 24609282673,
                    "name": "Family Guy",
                    "reach": "0.12",
                    "trends": "0.034"
                    },
                    {
                    "id": 130577231135,
                    "name": "Modern Family",
                    "reach": "0.0932",
                    "trends": "0.0344"
                    },
                    {
                    "id": 164755026965971,
                    "name": "Family Feud",
                    "reach": "0.08534",
                    "trends": "0.0453"
                    },
                    {
                    "id": 31092164580,
                    "name": "ABC Family's 25 Days of Christmas",
                    "reach": "0.06523",
                    "trends": "-0.021"
                    },
                    {
                    "id": 104046419630897,
                    "name": "Family",
                    "reach": "0.4334",
                    "trends": "0.234"
                    }]);
       scope.remove();
       expect(scope.datalist.length).toEqual(4);
              expect(scope.datalist).toEqual([{
                    "id": 24609282673,
                    "name": "Family Guy",
                    "reach": "0.12",
                    "trends": "0.034"
                    },
                    {
                    "id": 130577231135,
                    "name": "Modern Family",
                    "reach": "0.0932",
                    "trends": "0.0344"
                    },
                    {
                    "id": 164755026965971,
                    "name": "Family Feud",
                    "reach": "0.08534",
                    "trends": "0.0453"
                    },
                    {
                    "id": 31092164580,
                    "name": "ABC Family's 25 Days of Christmas",
                    "reach": "0.06523",
                    "trends": "-0.021"
                    }]);
   
    });
      
  });
});