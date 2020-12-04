
//top-scroll 引用(https://cotodama.co/pagetop/)
jQuery(function() {
var top = $('#top');
top.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
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
