$(document).ready(function () {

  $(".horizontal-nav_mobile").click(function(){
    $(".horizontal-nav").toggleClass("js-show");
    $(this).toggleClass("js-show-shadow");
  });

    //липкое меню
    // $(".horizontal-nav, .vertical-nav").stick_in_parent();


  $(window).scroll(function(){
    var topSlide1 = $("#firstPage").offset().top;
    var topSlide2 = $("#scenario").offset().top;
    console.log(topSlide2);
    if($(window).scrollTop() == topSlide2) {
        $(".vertical-nav, .horizontal-nav").addClass("js-show-menu");
    }else if ($(window).scrollTop() == topSlide1) {
        $(".vertical-nav, .horizontal-nav").removeClass("js-show-menu");
    }
  });





    //добавление буквы
    function addLetter (){
        $(".accent-letter_add-letter").click(function(e){
            var count = $(this).parents(".accent-letter_btn-box").siblings(".accent-letter_list").find(".accent-letter_item").length + 1;
            var countBox = $(".accent-letter_box").length;
            e.preventDefault();
            var $accentTemplate = $(
                '<div class="accent-letter_item">' +
                '<input id="accent-letter_radio-' + count + countBox +'" type="radio" name="accent' +  countBox +'">' +
                '<label for="accent-letter_radio-' + count + countBox +'" class="accent-letter_radio"></label>' +
                '<input type="text" class="accent-letter_input">' +
                '</div>'
            );
            $(this).parents(".accent-letter_btn-box").siblings(".accent-letter_list").append($accentTemplate).find('.accent-letter_input').focus();

            $('.accent-letter_input').mask('*', {'translation': {
                "*": {pattern: /[^]/}}
            });
        });
    }
    addLetter();

    // удаление буквы
    function removeLetter (){
        $(".accent-letter_remove-letter").click(function(e){
            e.preventDefault();
            $(this).parents(".accent-letter_btn-box").siblings(".accent-letter_list").find(".accent-letter_item:last-child").remove();
        });
    }
    removeLetter();



    //перескок на следующию букву
    $(".accent-letter_input").keypress(function() {
        $(this).parent().next().find('.accent-letter_input').focus();
        $('.accent-letter_input').mask('*', {'translation': {
            "*": {pattern: /[^]/}
            //        Я: {pattern: /[А-Яа-я]/}
          }
        });
    });

    //добавление слова
    $(".accent-letter_add-word").click(function(e){
        e.preventDefault();
        var countBox = $(".accent-letter_box").length+1;
        var $accentBoxTemplate = $(
            '<div class="accent-letter accent-letter_box">' +
            '<div class="accent-letter_list">' +
            '<div class="accent-letter_item">' +
            '<input id="accent-letter_radio-1'+ countBox +'" type="radio" name="accent' +  countBox +'">' +
            '<label for="accent-letter_radio-1'+ countBox +'" class="accent-letter_radio"></label>' +
            '<input type="text" class="accent-letter_input">' +
            '</div>' +
            '<div class="accent-letter_item">' +
            '<input id="accent-letter_radio-2'+ countBox +'" type="radio" name="accent' +  countBox +'">' +
            '<label for="accent-letter_radio-2'+ countBox +'" class="accent-letter_radio"></label>' +
            '<input type="text" class="accent-letter_input">' +
            '</div>' +
            '<div class="accent-letter_item">' +
            '<input id="accent-letter_radio-3'+ countBox +'" type="radio" name="accent' +  countBox +'">' +
            '<label for="accent-letter_radio-3'+ countBox +'" class="accent-letter_radio"></label>' +
            '<input type="text" class="accent-letter_input">' +
            '</div>' +
            '<div class="accent-letter_item">' +
            '<input id="accent-letter_radio-4'+ countBox +'" type="radio" name="accent' +  countBox +'">' +
            '<label for="accent-letter_radio-4'+ countBox +'" class="accent-letter_radio"></label>' +
            '<input type="text" class="accent-letter_input">' +
            '</div>' +
            '<div class="accent-letter_item">' +
            '<input id="accent-letter_radio-5'+ countBox +'" type="radio" name="accent' +  countBox +'">' +
            '<label for="accent-letter_radio-5'+ countBox +'" class="accent-letter_radio"></label>' +
            '<input type="text" class="accent-letter_input">' +
            '</div>' +
            '<div class="accent-letter_item">' +
            '<input id="accent-letter_radio-6'+ countBox +'" type="radio" name="accent' +  countBox +'">' +
            '<label for="accent-letter_radio-6'+ countBox +'" class="accent-letter_radio"></label>' +
            '<input type="text" class="accent-letter_input">' +
            '</div>' +
            '</div>' +
            '<div class="accent-letter_btn-box">' +
            '<div class="accent-letter_btn">' +
            '<a href="#" class="accent-letter_add-letter"></a>' +
            '<a href="#" class="accent-letter_remove-letter"></a>' +
            '</div>' +
            // '<a href="#" class="c-tooltip">' +
            // '<span class="c-tooltip_text">Добавление и удаление букв в слове</span>' +
            // '</a>' +
            '</div>' +
            '</div>'
        );
        $('.l-slide-accent').append($accentBoxTemplate).find('.accent-letter_input:first-child').focus();

        $('.accent-letter_input').mask('*', {'translation': {
            "*": {pattern: /[^]/}
            //        Я: {pattern: /[А-Яа-я]/}
        }
        });

        $(".accent-letter_input").keypress(function() {
            $(this).parent().next().find('.accent-letter_input').focus();
        });

        addLetter();
        removeLetter();
    });

    //скролл
    var menu_selector = ".vertical-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
    function onScroll(){
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " .active").removeClass("active");
                $(this).parents(".vertical-menu_item").addClass("active");
            } else {
                $(this).parents(".vertical-menu_item").removeClass("active");
            }
        });
    }

    $(document).ready(function () {

        $(document).on("scroll", onScroll);

        $(".vertical-menu_link, .c-arrow-down, .logo a").click(function(e){
            e.preventDefault();
            console.log(this);
            $(document).off("scroll");
            $(menu_selector + " .active").removeClass("active");
            $(this).parents(".vertical-menu_item").addClass("active");
            var hash = $(this).attr("href");
            var target = $(hash);

            $("html, body").stop().animate({
                scrollTop: target.offset().top
            }, 300, function(){
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });

        });

    });


    //ловим чекбоксы и выводим в последний слайд
    function checkedInner (elem, elemInner) {
        $(elem).click(function() {
            var inputCheck = $(this).prop("checked");
            var text = $(this).next("label").text();
            if (inputCheck == true) {
                $(elemInner).text(text + ' ');
            } else {
                return false;
            }
        });
    }

    checkedInner('.section-scenario input[type="radio"]', '.information-scenario');
    checkedInner('.section-view input[type="radio"]', '.information-view');
    checkedInner('.section-type input[type="radio"]', '.information-type');
    checkedInner('.section-form-style input[type="radio"]', '.information-form-style');
    checkedInner('.section-law input[type="radio"]', '.information-law');

    //Музыкальное сопровождение
    checkedInner('.js-musical-direction input[type="checkbox"]', '.information-direction');
    checkedInner('.js-tempo input[type="checkbox"]', '.information-tempo');

    //выводим контакты в последний слайд
    function contactInner(elem, elemInner) {
        $(elem).on("change", function(){
            var text = $(this).val();
            $(elemInner).text(text + " ");
        });
    }
    contactInner(".output_item--place input", ".information_text-place");
    contactInner(".output_item--number input", ".information_text-number");
    contactInner(".output_item--site input", ".information_text-site");
    $(".output_item--number input").mask('+7(000)000-00-00');

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
//счетчик слов
$('#count-words').on('change keyup keydown', function() {
   var $_count = parseInt($.trim($(this).val()).split(' ').length); // Подсчет слов
   $('.word-count_line').find('#counted').text($_count); // Вывод подсчета

   console.log($_count);
   var main = $_count * 100;
   var value = (main / 80);
   console.log('main: ' + main);
   console.log('value: ' + value);

   if($_count <= 80){
     $('.text-entry_slide-range').animate({
       "width": value+'%',
     }, 1);
   }
   else{
     alert('Превышен лимит слов!');
   }
 });



//окончание счетчик букв
});
