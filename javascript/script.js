jQuery(document).ready(function () {

    /*var currentIndex = 0;
    setInterval(function(){
        if(currentIndex < 2){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    var slidePosition = currentIndex * (-1900)+"px";
    $('.slideList').animate({left:slidePosition},400);
        
        
    },3000);//좌우슬라이드 
    
 */


    $('.slideList > div:gt(0)').hide(1000);
    setInterval(function () {
        $('.slideList > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.slideList');
    }, 3000); //페이드인아웃





    $("#m_menu ul.sub").hide();
    $("#m_menu ul.menu li").click(function () {
        $("ul", this).slideToggle("fast");
    });

    //모바일 메뉴바




    $(".nav > ul > li").mouseover(function () {
        $(".nav > ul > li > ul, .sub_bg").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function () {
        $(".nav > ul > li > ul, .sub_bg").stop().slideUp();
    });
    //네이게이션



    $(".info_in").click(function () {
        $("#modal").css("display", "block");
    });
    $(".modal_btn").click(function () {
        $("#modal").css("display", "none");
    });
    //본인인증 팝업메뉴




    $(function () {
        $('.accordion').each(function () {
            var dl = $(this);
            var allDt = dl.find('dt');
            var allDd = dl.find('dd');
            allDd.hide();
            allDt.css('cursor', 'pointer');
            allDt.click(function () {
                var dt = $(this);
                var dd = dt.next();
                allDd.hide();
                dd.show();
                allDt.css('cursor', 'pointer');
                dt.css('cursor', 'default');
            });
        });
    }); //아코디언


    var el = $("#events-example"),
        log = $("#event-log");

    el.collapse()
        .bind("open", function (e, section) {
            log.html("" + "");
        })
        .bind("close", function (e, section) {
            log.html("" + "");
        });








}); //레디닫기
