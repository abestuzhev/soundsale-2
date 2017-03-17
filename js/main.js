$(document).ready(function () {

  $(".horizontal-nav_mobile").click(function(){
    $(".horizontal-nav").toggleClass("js-show");
    $(this).toggleClass("js-show-shadow");
  });


//добавление буквы
    $(".accent-letter_add-letter").click(function(e){
        e.preventDefault();
        var count = $(".accent-letter_item").length + 1;
        // console.log(count);
        var $accentTemplate = $(
            '<div class="accent-letter_item">' +
            '<input id="accent-letter_radio-' + count + '" type="radio" name="accent">' +
            '<label for="accent-letter_radio-' + count + '" class="accent-letter_radio"></label>' +
            '<input type="text" class="accent-letter_input">' +
            '</div>'
        );
        // console.log($accentTemplate);
        $('.accent-letter_list').append($accentTemplate).find('.accent-letter_input').focus();


        $('.accent-letter_item').on('change', function(){
          //перескок на следующую букву
          console.log("сработал change");
          $(".accent-letter_input").keypress(function() {
              $(this).parent().next().find('.accent-letter_input').focus();
              $(this).mask('*', {'translation': {
                  "*": {pattern: /[^]/}
                  //        Я: {pattern: /[А-Яа-я]/}
                }
              });
          });
          //маска ввода
        });
    });
    // окончания скрипта добавления буквы

    //перескок на следующию букву
    $(".accent-letter_input").keypress(function() {
        $(this).parent().next().find('.accent-letter_input').focus();
        $('.accent-letter_input').mask('*', {'translation': {
            "*": {pattern: /[^]/}
            //        Я: {pattern: /[А-Яа-я]/}
          }
        });
    });
    //маска ввода


//плавный якорь
// var top;
//     function scrollToAnchor (elem) {
//         $(elem).on("click", function (event) {
//             event.preventDefault();
//             var id  = $(this).attr('href');
//                 top = $(id).offset().top;
//             console.log(top);
//             $('body').animate({scrollTop: top}, 500);
//         });
//     }
//     scrollToAnchor(".c-arrow-down");
//     scrollToAnchor(".vertical-menu_link");
//     scrollToAnchor(".logo a");




    // активные пункты меню
    // $(".c-arrow-down").click(function(e){
    //     e.preventDefault();
    //     $(".vertical-menu .active").removeClass("active").next().addClass("active");
    // });

    // $(".logo a").click(function(e){
    //     e.preventDefault();
    //     $(".vertical-menu_item").removeClass("active");
    // });

/*

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

    */

});
