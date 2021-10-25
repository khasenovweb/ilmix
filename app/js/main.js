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
        navText: ["<img src='/img/hero-slider-orrow-left.svg'>","<img src='/img/hero-slider-orrow-right.svg' >"],
    });


    $('.heromain__logoblock__hamburger').click(function(){
        $('.nav').toggleClass('active');
        $(this).toggleClass('active');
        $('.heromain__header').toggleClass('nav__active');
        $('.global__wrapper').toggleClass('overflow-hidden');
    });


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
});