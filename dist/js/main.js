$(document).ready(function(){
	var touch = $(".touch-menu"),
			menu = $(".main-navigation"),
			planBasicBtn = $(".plan-basic-btn"),
			planProBtn = $(".plan-pro-btn"),
			planPremiumBtn = $(".plan-premium-btn"),
			planBasicTitle = $('.plans-title:contains("Basic")');
			planProTitle = $('.plans-title:contains("Pro")');
			planPremiumTitle = $('.plans-title:contains("Premium")');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$('a[href^="#"]').on("click", function(e){ 
		var anchor = $(this);
		wid = $(window).width();
		if (wid<541) {
		$('html, body').stop().animate({ 
			scrollTop: $(anchor.attr("href")).offset().top-56}, 1000);
			e.preventDefault();
		} else {
			$('html, body').stop().animate({ 
			scrollTop: $(anchor.attr("href")).offset().top-102}, 1000);
			e.preventDefault();
		}
		return false;﻿
	 }); 

	$(planBasicBtn).hover(
		function(){
			$(planBasicTitle).css("background-color", "#49cbcd");},
		function () {
			$(planBasicTitle).css("background-color", "#485460");}
	);
	$(planProBtn).hover(
		function(){
			$(planProTitle).css("background-color", "#49cbcd");},
		function () {
			$(planProTitle).css("background-color", "#485460");}
	);
	$(planPremiumBtn).hover(
		function(){
			$(planPremiumTitle).css("background-color", "#49cbcd");},
		function () {
			$(planPremiumTitle).css("background-color", "#485460");}
	);

});
