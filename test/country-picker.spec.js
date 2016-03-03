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

describe('Provider: pvpCountries', function () {

  beforeEach(module('angular-country-picker'));

  var pvpCountriesProvider;
  beforeEach(function() {
    module(function(_pvpCountriesProvider_) {
      pvpCountriesProvider = _pvpCountriesProvider_;
    });
  });

  var pvpCountries;
  beforeEach(inject(function(_pvpCountries_){
    pvpCountries = _pvpCountries_;
  }));

  it('should do something', function() {
    expect(!!pvpCountriesProvider).toBe(true);
    expect(!!pvpCountries).toBe(true);
  });

  describe('Provider method: setCountries', function () {

    it('should expose a method to set a custom list of countries', function() {
      expect(pvpCountriesProvider.setCountries).toBeDefined();
      expect(angular.isFunction(pvpCountriesProvider.setCountries)).toBe(true);
    });

    it('should set the list of custom countries', function() {
      var countries = [
        { name: 'Abkhazia', alpha2: 'AB'},
        { name: 'Kosovo', alpha2: 'XK'},
        { name: 'Nagorno-Karabakh', alpha2: 'NK'},
        { name: 'Northern Cyprus', alpha2: 'KK'},
        { name: 'Somaliland', alpha2: 'JS'},
        { name: 'South Ossetia', alpha2: 'XI'},
        { name: 'Transnistria', alpha2: 'PF'}
      ];
      pvpCountriesProvider.setCountries(countries);
      expect(pvpCountries.getCountries()).toBe(countries);
    });

  });

  describe('Service method: getCountries', function () {

    it('should expose a method to get an array of countries', function() {
      expect(pvpCountries.getCountries).toBeDefined();
      expect(angular.isFunction(pvpCountries.getCountries)).toBe(true);
    });

    it('should retrieve the array of countries', function() {
      var countries = pvpCountries.getCountries();
      expect(angular.isArray(countries)).toBe(true);
      expect(countries.length).toBe(249);
    });

  });

});
