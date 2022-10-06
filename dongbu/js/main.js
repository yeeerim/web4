$(function(){
    // depth2
    $('.gnb>li').mouseenter(function(){
        $('.header_wrap').stop().slideDown()
        $('.depth2').stop().slideDown()
    })
    $('header').mouseleave(function(){
        $('.depth2').stop().slideUp()
        $('.header_wrap').stop().slideUp(500)
        
    })

    // lang
    $('.lang').click(function(){
        $('.lang .list').stop().slideToggle()
    })

    // main slide
    const swiper = new Swiper('.swiper', {
        effect:'fade',
        direction: 'horizontal',
        loop: true,
        autoplay : { 
          delay : 6000, 
          disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음        
        },
      
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
    });

    // section1 스크롤 이벤트 발생
    $(window).scroll(function(){
        let ani = $(window).scrollTop();
        console.log(ani)

        if(ani >=500){
            $('.square2').addClass('on')
            $('.go_top').addClass('on');
        }else{
            $('.go_top').removeClass('on');
        }
        if(ani >=1100){
            $('.square3').addClass('on')
        };
        $('.go_top').on('click', function () {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 500);
        });
    })
    
    $('.inner .ani1').mouseenter(function(){
        $('.inner .ani1').addClass('on')
    })
    $('.inner .ani1').mouseleave(function(){
        $('.inner .ani1').removeClass('on')
    })
    $('.inner .ani2').mouseenter(function(){
        $('.inner .ani2').addClass('on')
    })
    $('.inner .ani2').mouseleave(function(){
        $('.inner .ani2').removeClass('on')
    })

    // family site
    $('.family').click(function(){
        $('.family_list').stop().slideToggle()
        $('.family').toggleClass('on')
    })

    $('.menu_btn').click(function(){
        $('.menu_btn').toggleClass('active');
        $('.m_gnb').toggleClass('on');
        $('.m_gnb>li').removeClass('on');
        $('.depth2').hide();
    })

    $('.m_gnb .depth2').hide();
    $('.m_gnb>li').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on')
        $(this).find('.depth2').slideToggle();
        $(this).siblings().find('.depth2').slideUp();
    });

})