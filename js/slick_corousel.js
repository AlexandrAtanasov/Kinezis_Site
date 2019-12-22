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
    
    
    $(".person_corousel").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        lazyLoad: 'ondemand',
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        speed: 500,
        responsive: [
          {
            breakpoint: 1131,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 911,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 711,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
            }
          }
        ]
      });

    //click on the button to show information about people on the main page on a big screen
    $(".content__person_review_show").on('click', function(event){
        $that = $(this);
        $thatText = $that.text();
        $that.text($thatText == 'Читать далее...' ? 'Скрыть' : 'Читать далее...');
        $that.next(".content__person_review_hide").toggleClass("content__person_review");
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
