// ===============================//
// ============= Libs ===========//
// ==============================//
@@include('libs/jquery.js')
@@include('libs/jquery.fancybox.min.js')
@@include('libs/owl.carousel.min.js')
@@include('libs/mask.js')
@@include('libs/mask-phone.js')
@@include('libs/headhesive.js')
@@include('libs/parallax.min.js')
@@include('libs/validate.js')
@@include('libs/scroll.js')
// ==============================//
// =========== Libs ===============//
// ==============================//
 
$(document).ready(function(){

    $('[data-paralax-scene]').each(function(i, el){
        var parallaxInstance = new Parallax(el);
    });
    
    $('.heromain__slider').owlCarousel({
        items: 1,
        nav: true,
        navText: ["<img src='img/hero-slider-orrow-left.svg'>","<img src='img/hero-slider-orrow-right.svg' >"],
    });


    $('.type__slider').owlCarousel({
        items: 4,
        nav: true,
        navText: ["<img src='img/type_slider_nav_prev.svg'>","<img src='img/type_slider_nav_next.svg' >"],
        margin: 30,
        dotsContainer: '.type__slider__dots',
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1024: {
                items: 4
            },
        }
    });
    $('.whatelse__slider ').owlCarousel({
        items: 4,
        nav: true,
        margin: 30
    });


    $('.heromain__logoblock__hamburger').click(function(){
        $('.nav').toggleClass('active');
        $(this).toggleClass('active');
        $('.heromain__header').toggleClass('nav__active');
        $('.global__wrapper').toggleClass('overflow-hidden');
    });

    $('[data-modal-show]').click(function(){
        var id = $(this).attr('data-modal-show');
        $('[data-modal="'+id+'"').addClass('active');
        $('.global__wrapper').addClass('overflow-hidden');
        var scrollbar_width = get_scrollbar_width();
        $('.global__wrapper').css('padding-right', scrollbar_width+'px');
    });
    $('[data-modal-close]').click(function(){
        var id = $(this).attr('data-modal-close');
        $('[data-modal="'+id+'"').removeClass('active');
        setTimeout(function(){
            $('.global__wrapper').removeClass('overflow-hidden');
            $('.global__wrapper').css('padding-right','0px');
        }, 300);
    });
    $('.modal__wrapper').click(function(event){
        if ($(event.target).closest(".modal").length) return; 
        $(this).removeClass('active');
        setTimeout(function(){
            $('.global__wrapper').removeClass('overflow-hidden');
            $('.global__wrapper').css('padding-right','0px');
        }, 300);
    })



    // Получаем ширину скроллбара
    function get_scrollbar_width(){
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        
        // мы должны вставить элемент в документ, иначе размеры будут равны 0
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();
        console.log(scrollWidth);
        
        return scrollWidth;
    }
    // END Получаем ширину скроллбараk

    $.validator.addMethod(
        "phone",
        function (value) {
            return value.replace(/\D+/g, "").length >= 11;
        },
        "Введите номер телефона полностью"
    );

    $("form[data-form-validate='ask-us']").each(function (i, el) {
        $(el).validate({
            rules: {
                phone: "phone",
                name: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Введите имя"
                }
            },
            submitHandler: function (form) {
                console.log('Валидно можно отправлять');
            }
        });
    });

    $("form[data-form-validate='modal']").each(function (i, el) {
        $(el).validate({
            rules: {
                phone: "phone",
                name: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Введите имя"
                }
            },
            submitHandler: function (form) {
                console.log('Валидно можно отправлять');
            }
        });
    });
});