var menuBtn = $(".menu_wrap ul .menuBtn");
var contents = $(".section");

menuBtn.click(function () {
  var tg = $(this);
  var i = tg.index();
  var content = contents.eq(i);
  var tt = content.offset().top;
  $("html,body").animate({ scrollTop: tt }, 800);
  menuBtn.removeClass("on");
  tg.addClass("on");
});

$(window).scroll(function () {
  var sct = $(window).scrollTop();
  contents.each(function (j) {
    var tg = $(this);
    if (tg.offset().top-100 <= sct) {
      menuBtn.removeClass("on");
      menuBtn.eq(j).addClass("on");
    }
  });
});
