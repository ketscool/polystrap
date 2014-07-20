/*!
 * Polystrap v3.0.1.1 (https://github.com/ketscool/polystrap)
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

// RIPPLE EFFECT
// ============================================================
$(document).ready(function() {

  'use strict';

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripples__circle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });

});

