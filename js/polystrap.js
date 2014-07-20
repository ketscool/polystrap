/*!
 * Polystrap v3.0.1.1 (http://tuxindia.com)
 * Author Ketan Thakkar
 * Date 2014-07-19
 * Copy-rightly 2014
 * Licensed under PNL (Pseudo Nerds License)
 */

// NAVIGATION CANVAS ROW TOGGLE EVENT
// ============================================================
 
 $(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

// SIDEBAR TOGGLE BUTTON ANIMATIED ARROW
// ============================================================
$(function(){
    var activateHamburger = function(event) {
        var el = $(this);
        if (el.hasClass('active')){
            el.addClass('active-end');
            el.one('transitionend', function(){
                el.removeClass('active active-end')
            });
        } else {
            el.addClass('active');
        }
    };
    $('.hamburger').click(activateHamburger);
});


