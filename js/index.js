$(function () {
    // 로딩 시 스크롤 탑 0
    $('body, html').animate({
        scrollTop: 0
    }, 800);

    // 스크롤 이벤트
    $(window).scroll(function () {
        const scroll = $(this).scrollTop();

        // fade_in > div
        $('.fade_in > div').each(function () {
            let botHeight = $(this).offset().top + $(this).outerHeight();
            let botWindow = $(window).scrollTop() + $(window).height();
            if (botWindow > botHeight / 1.15) {
                $(this).addClass('active');
            }
        });

        // title:after 이벤트
        $('.title').each(function () {
            let botHeight = $(this).offset().top + $(this).outerHeight();
            let botWindow = $(window).scrollTop() + $(window).height();
            if (botWindow > botHeight / 0.95) {
                $('.title').removeClass('on');
                $(this).addClass('on');
            }
        });

        // 스크롤 위치 이벤트
        $('.scrollTarget').each(function () {
            let botHeight = $(this).offset().top + $(this).outerHeight();
            if (scroll >= $(this).offset().top - 2 && scroll <= botHeight) {
                let target = $(this).attr('id');
                $('.navigation ul li').removeClass('on');
                $('.navigation').find('.' + target).addClass('on');
            }
        });

        // md_bg 롤링
        $('.md_bg_wrap').each(function () {
            let botHeight = $(this).offset().top + $(this).outerHeight();
            let botWindow = $(window).scrollTop() + $(window).height();
            let md_height = $(this).height();
            let md_bg = $(this).find('.md_bg');
            let md_bg_height = $(md_bg).height();
            if (botWindow > botHeight / 1.15) {
                if (md_bg_height > md_height) {
                    $('.md_bg_wrap .md_bg').removeClass('active');
                    $(md_bg).addClass('active');
                }
            }
        });

        // 스킬점수 카운트업
        $('.skills_item').each(function () {
            let botHeight = $(this).offset().top + $(this).outerHeight();
            let botWindow = $(window).scrollTop() + $(window).height();
            let score = $(this).find('.progress .score');
            let total = $(this).find('.progress .total');
            let percent_number = $(this).find('.number');
            if (botWindow > botHeight / 1.15) {
                let total_width = $(total).width();
                $(score).stop().animate({
                    width: total_width * $(percent_number).text() / 100
                }, 3000);
            }
        });
    });

    // 내비게이션 스크롤이동
    $('.navigation ul li a').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let targetOffset = $(target).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 800);
    });

    // 어바웃 백그라운드 호버 시 this 제외 투명
    $('.about_bg').hover(function () {
        $('.about_bg').not($(this)).addClass('on');
    }, function () {
        $('.about_bg').removeClass('on');
    });

    // 라이크아이템 호버 시 this 제외 투명
    $('.like_item').hover(function () {
        $('.like_item').not($(this)).addClass('on');
    }, function () {
        $('.like_item').removeClass('on');
    });

    // 다크모드
    $('.darkmode').click(function (e) {
        e.preventDefault();
        if ($(this).text() == 'dark-mode') {
            $('body').addClass('dark');
            $(this).text('bright-mode');
        } else {
            $('body').removeClass('dark');
            $(this).text('dark-mode');
        }
    });

    // 클립보드
    function copyToClipboard(element) {
        const temp = $('<input>');
        $('body').append(temp);
        temp.val($(element).find('.address').text()).select();
        document.execCommand('copy');
        temp.remove();
    }
    $('.contact > a').on('click', function (e) {
        e.preventDefault();
        copyToClipboard($(this));
    });

    // 포인터
    $(document).mousemove(function (e) {
        $('.pointer').css({
            left: e.pageX,
            top: e.pageY
        });
    });

    function pointer(value) {
        $('.pointer').css({
            width: value,
            height: value
        });
    }
    $('a').hover(function () {
        pointer(50);
    }, function () {
        pointer(0);
    }).mousedown(function () {
        pointer(30);
    }).mouseup(function () {
        pointer(50);
    });

    // explore -> visited
    $('.md_item2 a').click(function () {
        $(this).parent().children('a').attr('title', 'visited website');
    });

    // 리사이즈 함수
    // 라이크그리드 정비율
    function like_grid_square() {
        $('.like_grid').css({
            'grid-auto-rows': $('.like_grid .like_item2').width()
        });
    }
    like_grid_square();
    // 스킬점수 카운트업
    function skills_count_up() {
        let score = $(this).find('.progress .score');
        let total = $(this).find('.progress .total');
        let percent_number = $(this).find('.number');
        let total_width = $(total).width();
        $(score).stop().animate({
            width: total_width * $(percent_number).text() / 100
        }, 3000);
    }
    $(window).resize(function () {
        like_grid_square();
        skills_count_up();
        like_grid_tag_position();
    });
});