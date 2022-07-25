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
    
    
    $('.whatelse__slider ').owlCarousel({
        items: 4,
        nav: true,
        margin: 30
    });


    $('.heromain__logoblock__hamburger').click(function(){
        $('.nav').toggleClass('active');
        $(this).toggleClass('active');
        $('.heromain__header').toggleClass('nav__active');
        if( $('.nav').hasClass('active') == false ) {
            setTimeout(function(){
                $('body').removeClass('overflow-hidden');
                $('body').css('padding-right','0px');
            }, 300);
        }else {
            $('body').addClass('overflow-hidden');
            var scrollbar_width = get_scrollbar_width();
            $('body').css('padding-right', scrollbar_width+'px');
        }
    });



    $('[data-modal-show]').click(function(){
        var id = $(this).attr('data-modal-show');
        modalShow(id);
    });

    $('[data-modal-close]').click(function(){
        var id = $(this).attr('data-modal-close');
        modalClose(id);
    });

    $('.modal__wrapper').click(function(event){
        if ($(event.target).closest(".modal").length) return; 
        var id = $(this).attr('data-modal');
        modalClose(id);
    });


    function modalShow(id) {
        $('[data-modal="'+id+'"').addClass('active');
        $('body').addClass('overflow-hidden');
        var scrollbar_width = get_scrollbar_width();
        $('body').css('padding-right', scrollbar_width+'px');
    }

    function modalClose(id) {
        $('[data-modal="'+id+'"').removeClass('active');
        setTimeout(function(){
            $('body').removeClass('overflow-hidden');
            $('body').css('padding-right','0px');
        }, 300);
    }



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

    
});