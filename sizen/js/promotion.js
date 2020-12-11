//top-scroll
jQuery(function() {
    var top = $('#pageup');
    top.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {  
            top.fadeIn();
        } else {
            top.fadeOut();
        }
    });
    $('a[href^="#"]').click(function(){
        var time = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" ? 'html' : href);
        var distance = target.offset().top;
        $("html, body").animate({scrollTop:distance}, time, "swing");
        return false;
      });
    });

//ハンバーガーメニュー
$(function() {
　$('.hamburger').click(function() {
　　$(this).toggleClass('active');

　if ($(this).hasClass('active')) {　
　　$('.menu').addClass('active');
　} else {
　　$('.menu').removeClass('active');
　}
　});
});


// スライド

var image_src = new Array('./image/washtop.png','./image/sizentop.png');
let num = 0;

function changeImg(num) {
  $(".pic").attr("src", image_src[num]);
}

function back() {
  if (num == 0) {
    num = 1;
  }
  else {
    num --;
  }
  changeImg(num);
}

function go() {
  if (num == 1) {
    num = 0;
  }
  else {
    num ++;
  }
  changeImg(num);
}
