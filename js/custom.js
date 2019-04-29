$(document).ready(function() {
  if ($(document).scrollTop() > $(window).height()*1) {
  	$('.side-logo').removeClass('transparent');
  } else {
    $('.side-logo').addClass('transparent');
  }
  if ($(document).scrollTop() > $(window).height()*.1) {
    $('.navbar-top').addClass('affix');
    $('.logo').removeClass('transparent');
  } else {
    $('.navbar-top').removeClass('affix');
    $('.logo').addClass('transparent');
  }
});
$(window).scroll(function() {
  if ($(document).scrollTop() > $(window).height()*1) {
  	$('.side-logo').removeClass('transparent');
  } else {
    $('.side-logo').addClass('transparent');
  }
  if ($(document).scrollTop() > $(window).height()*.1) {
    $('.navbar-top').addClass('affix');
    $('.logo').removeClass('transparent');
  } else {
    $('.navbar-top').removeClass('affix');
    $('.logo').addClass('transparent');
  }
});
