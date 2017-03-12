$(document).ready(function () {

//плавный якорь
//     function scrollToAnchor (elem) {
//         $(elem).on("click", function (event) {
//             event.preventDefault();
//             var id  = $(this).attr('href'),
//                 menuHeight = 75,
//                 top = $(id).offset().top;
//             topIndent = top - menuHeight;
//             console.log(top);
//             $('body').animate({scrollTop: topIndent}, 1000);
//         });
//     }
    function scrollToAnchor (elem) {
        $(elem).on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            console.log(top);
            $('body').animate({scrollTop: top}, 800);
        });
    }
    scrollToAnchor(".c-arrow-down");
    // scrollToAnchor(".vertical-menu_link");
    scrollToAnchor(".logo a");

    $(".c-arrow-down").click(function(e){
        e.preventDefault();
        $(".vertical-menu .active").removeClass("active").next().addClass("active");
    });

    $(".logo a").click(function(e){
        e.preventDefault();
        $(".vertical-menu_item").removeClass("active");
    });



    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight,
    // All list items
        menuItems = $(".vertical-menu_link"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
    });


    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            // menuItems
            //     .parent().removeClass("active")
            //     .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });

});

