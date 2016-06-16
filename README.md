# Accessible::Bootstrap3::Rails

#### A gem to bring the npm package, accessible-bootstrap3, into your rails project.
This gem will do it's best to keep the version number in alignment with the accessible-bootstrap3 package version.
Any changes made the this gem that aren't fallowing a change from the npm package will be denoted with a slight version bump. Then on the next npm package version update we will bring them back into alignment. The versioning may look something like this when they diverge.
  * accessible-bootstrap3
    `"version": "0.1.5"`
  * accessible-bootstrap3-rails
    `"version": "0.1.51"`


## Installation

Add this line to your application's Gemfile:

```ruby
gem 'accessible-bootstrap3-rails'
```

And then run.

    $ bundle

Or install it yourself as:

    $ gem install accessible-bootstrap3-rails

## Usage

Add it and the jQuery dependency to your `application.js`:
```
  //= require accessible-bootstrap3/index
```
If you're already using **'jquery >=1.9.1 < 2.0.0'** you can leave out the next line

`//= require jquery/dist/jquery.min.js`

### Rails View Helpers

This Gem ships with a couple view helpers. The first helps with implementing the skip navigation
feature that comes with accessible-bootstrap3. The second is an method to wrap abbreviations in
`<abbr>` tags with proper titles. This way screen readers will properly announce the abbreviations one letter at a time.

#### page_header helper
1) To make use of this feature add the skip navigation link in your application.html.haml
right at the top of the view template like so.

````
%body
  .container
    = link_to "Skip Navigation", "#heading", id: "skip-nav"
```
2) Add the content_for? block at the top of the page under your navigation.

```
- if content_for?(:page_header)
    %h1#heading
      = yield :page_header
````

3) In each of your view templates that will render inside off the application.html.haml you can then utilize the **page_header** method to set your page heading like so.
  * The page headers are automatically processed with the wrap_abbrevations method that is described bellow.

```
## index.html.haml

- page_header "The Heading of Your Choosing (SAAS). Homepage."

%div.landing-page
  %div
    %p ...your sites content...
```
Now on any page that has a **page_header** you will be able to use the skip navigation link to move passed the navigation and focus directly onto the page_header.

#### wrap_abbrevations helper
1) Any strings that may contain abbreviations can be processed by the **wrap_abbreviations**
method like so.
```ruby
wrap_abbreviations("NASA homepage.")
## returns "<abbr title='N A S A'>NASA</abbr> homepage"
```
* This method searches the string for groups of uppercase letter characters in groups of two or more and wraps them with the `<abbr>` tag and title. It works on strings with multiple abbreviations and is really useful for dynamically generated strings coming from the database. All the strings are returned with html_safe method already called on them so be careful when using this with dynamic content.


## Usage specs as specified in accessible-bootstrap3 npm package.

> https://www.npmjs.com/package/accessible-bootstrap3
# bootstrap3-accessibility-patches

A package for making your bootstrap3 web app more accessible.
This Package tries to address accessibility related issues mostly related to keyboard navigation of your web-views.

  > 1. We start off making sure drop-downs and sub-menus get closed when they lose focus.
  > 2. We update area-expanded attributes accordingly when drop-downs are opened and closed.
  >      * Make sure you start off by adding are-expanded="false" to all .dropdown-toggle .trigger class elements.
  > 3. We automatically add attributes like role=menu to any .dropdown-menu or .dropdown-submenu menus. We also set aria-haspopup="true" and tabindex="0" on any a.trigger  a.dropdown-toggle links.
  > 3. We add the ability to open and close menus with the space-bar.
  > 4. We also prevent the enter key from submitting forms except when on the form submit button. When enter is pressed on
  >    a text input it will place focus on the next input. When it is pressed on a checkbox or radio button it will toggle
  >    the state of that input.
  > 5. Lastly, we make it easy to add a skip navigation link at the top of your page.

This Package depends on jQuery so you need to link to a version of jQuery that is greater than 1.9.1, but less than 2.0.0.
This package may work with older and or newer jquery versions than specified, but this is untested.

You will also need to link to index.js in this package.

```html
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
