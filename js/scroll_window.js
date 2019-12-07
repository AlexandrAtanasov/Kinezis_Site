$(document).ready( function() {
    $(document).ready(function(){
        if ( window.matchMedia( "screen and (min-width: 1131px)").matches ) {
            $(".header__callback_button").removeClass("mobile");
            $(".header__callback_button").addClass("desktop");
        } else if ( window.matchMedia( "screen and (max-width: 1130px)").matches ) {
            removeNavClasses();
            $(".header__callback_button").removeClass("desktop");
            $(".header__callback_button").addClass("mobile");
        } else {console.log("error");};
        });
    // when resizing window checking width of it and cleared unused classes
    $(window).on("resize", function(){
        if ( window.matchMedia( "screen and (min-width: 1131px)").matches ) {
            removeHeaderClasses();
            $(".header__callback_button").removeClass("mobile");
            $(".header__callback_button").addClass("desktop");
            // $(".header__callback_box").removeClass("overlay__hide");
            // $(".header__telephone_box").removeClass("header__callphone_box");
            // $(".header__callback_box").addClass("header__callphone_box");
            // $(".header__telephone_box").addClass("overlay__hide");
        } else if ( window.matchMedia( "screen and (max-width: 1130px)").matches ) {
            removeNavClasses();
            $(".header__callback_button").removeClass("desktop");
            $(".header__callback_button").addClass("mobile");
        } else {
            removeAllClasses();
        };
    });
    
    // when scrolling window checking width of it and accept classes to elements
    $(window).on("scroll", function() {
        if ( window.matchMedia( "screen and (min-width: 1131px)").matches ) {
            $("nav").addClass("scroll__menu_box");      
            var $scroll__menu_elementPos = $(".scroll__menu_box").offset().top;
			if ( $(this).scrollTop() > $scroll__menu_elementPos ) {
                $("nav.scroll__menu_box > .scroll__menu_element").addClass("scroll__menu_element_fix");
            } else {
                $("nav.scroll__menu_box > .scroll__menu_element").removeClass("scroll__menu_element_fix");
            }
            
        } else if ( window.matchMedia( "screen and (max-width: 1130px)").matches ) {
            $("header").addClass("scroll__menu_mobile");      
            var $scroll__menu_elementPos = $(".scroll__menu_mobile").offset().top;
			if ( $(this).scrollTop() > $scroll__menu_elementPos ) {
                $("header.scroll__menu_mobile > .scroll__menu_element").addClass("scroll__menu_element_fix");
            } else {
                $("header.scroll__menu_mobile > .scroll__menu_element").removeClass("scroll__menu_element_fix");
            }
        } else {

            removeAllClasses();

        };
    })
});

// clearing classes of header after mobile version
function removeHeaderClasses() {
    $("header").removeClass("scroll__menu_mobile");
    $("header > div.scroll__menu_element").removeClass("scroll__menu_element_fix")
};

// clearing classes of nav after full version
function removeNavClasses() {
    $("nav").removeClass("scroll__menu_box");
    $("nav > div.scroll__menu_element").removeClass("scroll__menu_element_fix");
};
function removeAllClasses() {
    removeHeaderClasses();
    removeNavClasses();
    // console.log("странный размер экрана, ничего не работает!");
}