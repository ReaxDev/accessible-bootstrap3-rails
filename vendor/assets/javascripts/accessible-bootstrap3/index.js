$(document).ready(function() {
  console.log("bootstrap3-accessibility-patches loaded.");

  var getKeyCode = function(event) {
    // Some browsers use keyCode and some use which.
    // Return whichever one doesn't blow up.
    return event.keyCode || event.which;
  }
  //////////////////////////////////////////////////////////////////
  // This code removes the open class from a .dropdown menu,
  // or adds {"display": "none"} css to .sub-menu menu
  // after it && its children elements loose focus. Which in turn
  // causes the dropdown menu to close or hide.
  $('body').focusin(function(){
    // remove open class from all .dropdown elements
    $('.dropdown').removeClass('open');
    // Set aria-expanded="false" after we close the dropdown.
    $('.dropdown a.dropdown-toggle').attr("aria-expanded", false);
  });

  $('.dropdown').focusin(function(){
    var children = $(this).children();

    children.focusin(function(event) {
      // stop the bubble up event from triggering
      // the $('body').focusin function (line 16)
      // This prevents the dropdown from collapsing while focus is
      // on any of the children elements.
      event.stopPropagation();
      // Close sub-menu dropdown by adding display: none css.
      $('.dropdown-submenu > ul.sub-menu').css({"display": "none"})
    });
  });

  $('.dropdown-submenu').focusin(function(){
    var children = $(this).children();

    children.focusin(function(event) {
      // stop the bubble up event from triggering
      // the $('.dropdown').focusin function (line 21)
      // This prevents the dropdown from collapsing while focus is
      // on any of the children elements.
      event.stopPropagation();
    });
  });
  //////////////////////////////////////////////////////////////////

/// Toggle aria-expanded attribute for dropdown and submenus //////////
  $(".dropdown-toggle").bind("click", function() {
    var self = $(this);
    var parent = self.parent('.dropdown');
    expanded = !parent.hasClass("open");
    self.attr("aria-expanded", expanded);
  });

  $("a.trigger").bind("click", function() {
    var self = $(this);
    var submenu = self.next(".sub-menu");
    expanded = !(submenu.css("display") === "none");
    self.attr("aria-expanded", expanded);
  });
/////////////////////////////////////////////////////////////////////////

//// Modify keyboard defaults for dropdown menu and submenus.//////
  $('.dropdown-toggle').keydown(function(event) {
    var code = getKeyCode(event);
    var thisDropdown = $(this).parent('.dropdown');
    if ( !thisDropdown.hasClass('open') && (code == 27) ) {
      // stop escape key from opening dropdown
      event.stopPropagation();
    // If space bar hit open or close dropdown
    } else if (code === 32 ) {
      event.preventDefault();
      $(this).click()
    }
  });

  $('.dropdown-submenu a.trigger').keydown(function(event) {
    var code = getKeyCode(event);
    var subMenu = $(this).next("ul.sub-menu");

    if (code === 32 ) {
      // Stop page scroll
      event.preventDefault();
      // Open and close submenu when space bar is hit.
      subMenu.css('display') == "none" ? subMenu.css('display', 'block' ) : subMenu.css('display', 'none' )
    }
  });
///////////////////////////////////////////////////////

//// Skip Navigation ////////////////////////////////////////////////////
  // bind a click event to the 'skip' link
  $("#skip-nav").click(function(event){

    // strip the leading hash and declare
    // the content we're skipping to
    var skipTo="#"+this.href.split('#')[1];

    // Setting 'tabindex' to -1 takes an element out of normal
    // tab flow but allows it to be focused via javascript
    $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

        // when focus leaves this element,
        // remove the tabindex attribute
        $(this).removeAttr('tabindex');

    }).focus(); // focus on the content container
  });
/////////////////////////////////////////////////////////////////////////

  /// Prevent enter from submitting form //////////////////////////////////
  $(document).on("keypress", "form", function (event) {
    var code = getKeyCode(event);
    // If target is <textarea> or submit return true and do NOT modify normal behavior.
    if ($(event.target).is("textarea") || $(event.target).is("input:submit")) {return true}

    if (code == 13 ) {
      if ($(event.target).is("input:checkbox") || $(event.target).is("input:radio") ) {
        event.preventDefault();
        event.target.click();
        return false
      }
      if ($(event.target).is("select")) {event.preventDefault(); mouseDown(event.target); return false}

      tabIndexForward(event);
      event.preventDefault();
    }
  });

  //click element with virtual mouse.
  var mouseDown = function (element) {
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    element.dispatchEvent(event);
  };

  // Move tab index forward one input inside the form an event originates.
  var tabIndexForward = function(event) {
    var inputs = $(event.target).parents("form").eq(0).find(":input:visible");
    var idx = inputs.index(event.target);
    // If at end of focusable elements move back to beginning, if not move forward one.
    (idx == inputs.length - 1) ? inputs[0].focusin() : inputs[idx + 1].focus();
  }
  /////////////////////////////////////////////////////////////////////////
});
