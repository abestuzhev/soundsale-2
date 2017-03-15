$(document).ready(function () {

    var $accentTemplate = $(
        '<div class="accent-letter_item">' +
        '<input id="accent-letter_radio-1" type="radio" name="accent">' +
        '<label for="accent-letter_radio-1" class="accent-letter_radio"></label>' +
        '<input type="text" class="accent-letter_input">' +
        '</div>'
    );

    $(".accent-letter_add-letter").click(function(e){
        e.preventDefault();
        //  var listLenght= $('.accent-letter_list').length();
        //  var $accentTemplate;
        //  for(var i=5; i <= listLenght; i++) {
        //      $accentTemplate = $(
        //          '<div class="accent-letter_item">' +
        //          '<input id="accent-letter_radio- + i" type="radio" name="accent">' +
        //          '<label for="accent-letter_radio- + i" class="accent-letter_radio"></label>' +
        //          '<input type="text" class="accent-letter_input">' +
        //          '</div>'
        //      );
        //  };

        console.log($accentTemplate);
        $('.accent-letter_list').append($accentTemplate);
    });

    $(".accent-letter_input").keypress(function() {
        $(this).parent().next().find('.accent-letter_input').focus();

    });

    //
    $('.accent-letter_input').mask('*', {'translation': {
        "*": {pattern: /[^]/}
        //        Я: {pattern: /[А-Яа-я]/}
    }
    });

//плавный якорь
    function scrollToAnchor (elem) {
        $(elem).on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            console.log(top);
            $('body').animate({scrollTop: top}, 500);
        });
    }
    scrollToAnchor(".c-arrow-down");
    scrollToAnchor(".vertical-menu_link");
    scrollToAnchor(".logo a");


    // активные пункты меню
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
        menuItems = $(".vertical-menu_link"),
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
            //Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });

});
