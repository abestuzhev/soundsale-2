$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        navigation: false,
    	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    	menu: '#myMenu',
    	scrollingSpeed: 500,
    	easing: 'swing'
    });

    $('.step-button').click(function () {
    $.fn.pagepiling.moveSectionDown();
	});

    $("#myMenu").hover(function() {
    	// $("#container").toggleClass('menu-push-toright');
    	// $("#myMenu").toggleClass('menu-open');
	});
});