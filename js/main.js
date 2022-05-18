$(".header__navbar .btn").click(function () {
    $(".sub_menu").toggleClass('active');
    $("main").click(function () {
        $(".sub_menu").removeClass('active'); 
    }); 
});


// 
$("#navbar-btn").click(function () {
    $(this).toggleClass('active');
    $(".navbar_mobile").toggleClass('active');

    $("#catalog-btn").removeClass('active');
    $(".catalog_mobile").removeClass('active');
    $("#search-btn").removeClass('active');
    $(".search_mobile").removeClass('active');
});

$("#catalog-btn").click(function () {
    $(this).toggleClass('active');
    $(".catalog_mobile").toggleClass('active');

    $("#navbar-btn").removeClass('active');
    $(".navbar_mobile").removeClass('active');
    $("#search-btn").removeClass('active');
    $(".search_mobile").removeClass('active');
});

$("#search-btn").click(function () {
    $(this).toggleClass('active');
    $(".search_mobile").toggleClass('active');

    $("#navbar-btn").removeClass('active');
    $(".navbar_mobile").removeClass('active');
    $("#catalog-btn").removeClass('active');
    $(".catalog_mobile").removeClass('active');
});
// 



$(".mobile_menu_close").click(function() {
    $(".mobile_menu").removeClass('active');
    $(".menu_mobile .link").removeClass('active');
});
$(".catalog_mobile .li").click(function() {
    $(this).addClass('active');
});
$(".sub_catalog_close").click(function() {
    setTimeout(function() {
        $(".catalog_mobile .li").removeClass('active');
    }, 01);
});


if(document.querySelector(".product__content .btn")) {
    var modal = $(".modal");
    $(".product__content .btn").click(function() {
        modal.addClass("active");
    });
    $(".modal__close").click(function() {
        modal.removeClass("active");
    });
    $(".header").click(function() {
        modal.removeClass("active");
    });
    $(".footer").click(function() {
        modal.removeClass("active");
    });
};
if(document.querySelector('.tab_wrap')) {
    $("#tab_btn1").click(function (){
        $(this).addClass('active');
        $("#tab_btn2").removeClass('active');
        $("#tab_block1").addClass('active');
        $("#tab_block2").removeClass('active');
    });
    $("#tab_btn2").click(function (){
        $(this).addClass('active');
        $("#tab_btn1").removeClass('active');
        $("#tab_block2").addClass('active');
        $("#tab_block1").removeClass('active');
    });
};
if(document.querySelector('.catalog__aside')) {
    $(".catalog__aside .title").click(function() {
        $(this).toggleClass('active')
    });
};
if(document.querySelector('.catalog__aside')) {
    $('#filter_btn_open').click(function() {
        $(this).toggleClass('active');
        $(".catalog__aside").toggleClass('show');
    });
    $('.aside_filter_close button').click(function() {
        $(".catalog__aside").removeClass('show');
        $('#filter_btn_open').removeClass('active');
    });
};