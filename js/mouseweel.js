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

    addMousewheel();
    updateAnchors();

    // $(".section-incidental").bind("mousewheel", function() {
    //     return false;
    // });

    // $(".section-information").bind("mousewheel", function() {
    //     return false;
    // });


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
      // проверка - виден див полностью или нет
      if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
          // если виден

          $("body").off("mousewheel");

          console.log("блок");



      }else{
          // если не виден
          // addMousewheel();
          console.log("добавление body mousewheel");
      }
    }// checkPosition

    $(document).scroll(function(){
        // при скролле страницы делаем проверку
        checkPosition(".section-chronometry_flag");
        // checkPosition(".section-information_flag");
    });

    // после загрузки страницы сразу проверяем
    checkPosition(".section-incidental_flag");
    checkPosition(".section-information_flag");

    // проверка при масштабировании и изменении размера страницы
    // $(window).resize(function(){
    //     checkPosition(".section-incidental_flag");
    // });


    $(".logo").click(function(){
      if(top === 0) {
        addMousewheel();
      }
    });

});// end $(function(){
