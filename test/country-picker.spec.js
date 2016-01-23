'use strict';

describe('Directive: pvpCountryPicker', function () {

  // load the directive's module
  beforeEach(module('angular-country-picker'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<select ng-model="selectedCountry" pvp-country-picker></select>');
    element = $compile(element)(scope);
  }));

  it('should set the list of countries in the scope', function () {
    expect(scope.countries).toBeDefined();
    expect(scope.countries.length).toBe(249);
  });

  it('should generate a list of options with all the countries in the scope', function () {
    scope.selectedCountry = 'ES';
    scope.$digest();
    var options = element.find('option');
    expect(options.length).toBe(249);
  });

  it('should add an unknown option when the viewValue does not match any of the options', function () {
    scope.$digest();
    var options = element.find('option');
    expect(options.length).toBe(250);
    expect(options.eq(0).attr('value')).toBe('? undefined:undefined ?');
  });

});

describe('Service: pvpCountries', function () {

  beforeEach(module('angular-country-picker'));

  var pvpCountries;
  beforeEach(inject(function(_pvpCountries_){
    pvpCountries = _pvpCountries_;
  }));

  it('should be an array of countries', function() {
    expect(angular.isArray(pvpCountries)).toBe(true);
    expect(pvpCountries.length).toBe(249);
  });

});
