# angular-country-picker

AngularJS directive to generate a list of countries as options of the select element.

## Installation

You can install the directive using [Bower](http://bower.io/):

```bash
$ bower install angular-country-picker
```

Then you have to include it in your HTML:

```html
<script src="bower_components/angular-country-picker/country-picker.js"></script>
```

And inject the module `angular-country-picker` as a dependency of your application:

```js
angular.module('webApp', ['angular-country-picker']);
```

## Usage

The directive is intended to be used as an attribute of the native [select](https://docs.angularjs.org/api/ng/directive/select)
 directive setting its [ngOptions](https://docs.angularjs.org/api/ng/directive/ngOptions).
 Therefore ngModel is required for this to work.

```html
<select ng-model="selectedCountry" pvp-country-picker></select>
```

Besides ngOptions which is set automatically by this directive, any other optional attribute of the select directive could be used.

```html
<select name="country" ng-model="selectedCountry" pvp-country-picker required></select>
```

The default value to which ngModel is bound it's the two-letter country code, but this can be changed setting the
attribute to one of the following values:

* alpha2: two-letter country code defined in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
* alpha3: three-letter country code defined in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3).
* numeric: three-digit country code defined in [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric).
* name: the English name of the country.

```html
<select ng-model="selectedCountry" pvp-country-picker="name"></select>
```

## Testing

To run the tests:

```bash
$ npm install && bower install
$ npm install -g karma-cli
$ npm run test
```

## See also

[ISO 3166](http://www.iso.org/iso/country_codes.htm) is the International Standard for country codes and codes for their subdivisions.
Currently 249 countries, territories, or areas of geographical interest are assigned official codes in ISO 3166-1.