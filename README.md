# Accessible::Bootstrap3::Rails

#### A gem to bring bootstrap3-accessibility-patches into your rails project.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'accessible-bootstrap3-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install accessible-bootstrap3-rails

## Usage

Add it and the jQuery dependency to your `application.js`:

  //= require accessible-bootstrap3/index
  //= require jquery/dist/jquery.min.js


## Usage specs are specified in bootstrap3-accessibility-patches npm package.

> https://www.npmjs.com/package/bootstrap3-accessibility-patches

# bootstrap3-accessibility-pathches
A package for making your bootstrap3 web app more accessible.
This Package tries to address accessiblity related issues mostly related to keybord navigation of your webviews.

  > 1. We start off making sure drop-downs and sub-menus get closed when they lose focus.
  > 2. We update area-expanded attributes accordingly when drop-downs are opened and closed.
  > 3. We add the abilitiy to open and close menus with the space-bar. 
  > 4. We also prevent the enter key from submitting forms except when on the form submit button. When enter is pressed on
  >    a text input it will place focus on the next input. When it is pressed on a checkbox or radio button it will toggle  
  >    the state of that input. 
  > 5. Lastly, we make it easy to add a skip navigation link at the top of your page.
  
This Package depends on jQuery so you need to link to a version of jQuery that is greater than 1.9.1, but less than 2.0.0. 
This package may work with older and or newer jquery versions than specified, but this is untested.

You will also need to link to index.js in this package. 

``` html
  <script src="node_modules/bootstrap3-accessibility-patches/index.js"></script>
  <script src="node_modules/jquery/dist/jquery.min.js">
```

## Creating a skip navigation link. 

At the very top of the page you will need to create a link, That preferably, navigates to the first page heading after your navigation. This link needs to have an **ID** set to **skip-nav** like so.
```html
  <a link="#heading" id="skip-nav"><a>
```
And that's it, everything else happens behind the scenes.

## Disclaimer
This is not a solution to all your accessiblity woes, it's just a step in the right direction.
