/* main */
var mainLeft=document.querySelector('.main_left');
var mainRight=document.querySelector('.main_right');
var profileSection=document.querySelector('#profile');
var menu=document.querySelector('.menu_wrap');
let isScrolling=false;



window.addEventListener('scroll',throttlescroll);

function throttlescroll(){
    if(isScrolling == false){
        window.requestAnimationFrame(function(){
            disappear(mainLeft);
            disappear(mainRight);
            disappear(menu);
            isScrolling=false;
        })
    }
    isScrolling=true;
}

function disappear(el){
    var yScroll=window.scrollY
    if(yScroll>=100){
        el.classList.add('active');
    }else{
        el.classList.remove('active');
    }
}

/* animation Bar */
var charts = $('.charts');
    var chart = $('.chart');
    var chartOST = chart.offset().top - 700;
    // var excuted = false;
    // console.log(excuted);

    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop();
        if(currentSCT >= chartOST){
            if(!charts.hasClass('active')){
                animateChart();
                charts.addClass('active');
            }
        }
    });

    function animateChart(){
        chart.each(function(){
            var item = $(this);
            var title = item.find('p');
            var targetNum = title.attr('data-num');
            var line = item.find('.animation line');
    
            $({rate:0}).animate({rate:targetNum},
                {
                    duration:2000,
                    progress:function(){
                        var now = this.rate;
                        var amount = 200 - (200*now/100);
                        
                        title.text(Math.floor(now)+'%');
                        line.css({strokeDashoffset:amount});
                    }
            });
        }); //chart each
    }


/* inner_site */
$('.inner').hover(
    function(){
        var aH=$(this).innerHeight();
        var img=$(this).find('img');
        var imgH=img.innerHeight();

        img.stop().animate({top:aH-imgH},3000)
    },
    function(){
        var img=$(this).find('img');
        img.stop().animate({top:0},3000);
    }
)