$(function () {
	

var shadowbox = $(".shadowbox")
$(".show-nav").on("click", function() {
    $(".menu-wrapper").toggleClass("menu-wrapper--active");
    // $("body").toggleClass("unable-scroll");

});
$(".menu-wrapper").mouseup(function(e) {
    if (!$(".nav").is(e.target) &&
        $(".nav").has(e.target).length === 0) {
        $(".menu-wrapper").removeClass("menu-wrapper--active");
        // $("body").removeClass("unable-scroll");
    }
});

$(".product-slider").slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    mobileFirst: true
});
$(".banner").slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    fade: true
});

if($(document).width()<992) {
	$("body").on("click",".nav__link", function () {
		$(".subnav").not($(this).siblings(".subnav")).slideUp();
		$(this).siblings(".subnav").slideToggle();
	});
}
var currentSrc;
$("body").on("mouseover", ".product-card__img", function () {
	currentSrc = $(this).attr("src");
	var newSrc = $(this).attr("data-image");
	$(this).attr("src", newSrc);
});
$("body").on("mouseleave", ".product-card__img", function () {
	$(this).attr("src", currentSrc);
});

$("body").on("click", ".product-card__like", function () {
	$(this).toggleClass("pulse");
}) 

});