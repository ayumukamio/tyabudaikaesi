


    $('#topMainVisual').slick({
    accessibility: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1000,
    cssEase: 'ease-out',
    arrows:false,
    infinity:true
    });
  
//<!-- ページトップへ戻る -->

  $(function() {
    var topBtn = $('#pagetop');    
    topBtn.hide();
    $(window).scroll
      (function () {
        if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
        }
      else {
        topBtn.fadeOut();
      }
    });
  });

//<!-- スムーススクロール -->
  $(function () {
    $('a[href^="#top"]').on('click', function () {
      var speed = 1000;
      var href = $(this).attr('href');
      var target = $(href == '#' || href == '' ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop: position}, speed, 'swing');
      return false;
    });
  });

