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
    // scrollToAnchor(".vertical-menu_link");
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
            // Set/remove active class
            // menuItems
            //     .parent().removeClass("active")
            //     .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });

});

// прокрутка слайдов

var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;

$(function(){

  function updateAnchors() {
      anchors = [];
      $('.section').each(function(i, element){
          anchors.push( $(element).offset().top );
      });
      console.log(anchors);
  }

function addMousewheel() {
  $('body').on('mousewheel', function(e){
      e.preventDefault();
      e.stopPropagation();
      if( isAnimating ) {
          return false;
      }
      isAnimating  = true;
      if( e.originalEvent.wheelDelta >= 0 ) {
          currentAnchor--;
      }else{
          currentAnchor++;
      }
      if( currentAnchor > (anchors.length - 1)
          || currentAnchor < 0 ) {
          currentAnchor = 0;
      }
      isAnimating  = true;
      $('html, body').animate({
          scrollTop: parseInt( anchors[currentAnchor] )
      }, 500, 'swing', function(){
          isAnimating  = false;
      });
  });
}

    // addMousewheel();
    updateAnchors();

    function remove(){


    }


    // определение координат блока
    // функция проверки полной видимости элемента
    function checkPosition(example){
      // координаты дива
      var div_position = $(example).offset();
      // отступ сверху
      var div_top = div_position.top;
      // отступ слева
      var div_left = div_position.left;
      // ширина
      var div_width = $(example).width();
      // высота
      var div_height = $(example).height();

      // проскроллено сверху
      var top_scroll = $(document).scrollTop();
      // проскроллено слева
      var left_scroll = $(document).scrollLeft();
      // ширина видимой страницы
      var screen_width = $(window).width();
      // высота видимой страницы
      var screen_height = $(window).height();

      // координаты углов видимой области
      var see_x1 = left_scroll;
      var see_x2 = screen_width + left_scroll;
      var see_y1 = top_scroll;
      var see_y2 = screen_height + top_scroll;

      // координаты углов искомого элемента
      var div_x1 = div_left;
      var div_x2 = div_left + div_height;
      var div_y1 = div_top;
      var div_y2 = div_top + div_width;
      console.log(div_x1, div_x2, div_y1, div_y2 );
      // проверка - виден див полностью или нет
      if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
          // если виден

          $("body").off("mousewheel");
          console.log("блок");

          return false;

      }else{
          // если не виден
          addMousewheel();
          console.log("дальше");
      }
    }// checkPosition

    $(document).scroll(function(){
        // при скролле страницы делаем проверку
        checkPosition(".section-incidental_flag");
        checkPosition(".section-information_flag");
    });

    // после загрузки страницы сразу проверяем
    checkPosition(".section-incidental_flag");
    checkPosition(".section-information_flag");

    // проверка при масштабировании и изменении размера страницы
    // $(window).resize(function(){
    //     checkPosition(".section-incidental_flag");
    // });

});// end $(function(){
