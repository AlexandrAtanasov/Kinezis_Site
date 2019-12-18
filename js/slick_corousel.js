$(document).ready(function()
{
    (function go() {
        var elements = document.querySelectorAll('.content__carousel_img_src');
        if ( window.matchMedia( "screen and (max-width: 910px)").matches ) 
        {
            mobileImages(elements);
        }; 
        if ( window.matchMedia( "screen and (min-width: 911px)").matches ) 
        {
            bigImages(elements);
        };
    })();

    $(".lazy").slick({
      lazyLoad: 'ondemand',
      autoplaySpeed: 3000,
      infinite: true,
      autoplay: true,
      dots: true,
      arrows: false,
    });

});

function mobileImages(elements) {
    var regex1 = /.*mobile_.*/m;
    for ( var i = 0; i < elements.length; i++ ) 
    {
        if (regex1.exec(elements[i].innerHTML)) 
        {
            var element = elements[i].innerHTML;
            addCarouselElem(element);
        };
    };
};

function bigImages(elements) {
    var regex2 = /.*big_.*/m;
    for ( var i = 0; i < elements.length; i++ ) 
    {
        if (regex2.exec(elements[i].innerHTML)) 
        {
            var element = elements[i].innerHTML;
            addCarouselElem(element);
        };
    };
};

function addCarouselElem(element) {
    var
        carouselDiv = $('div.lazy'), 
        carouselElem = $('<img>', {
            src: element,
        });

    $(carouselDiv).append(carouselElem);  
};
