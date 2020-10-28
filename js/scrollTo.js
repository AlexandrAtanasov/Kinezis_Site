$(document).ready(function() {
    
    $(this).on("click", "li", function (event) {
        if ($(this).hasClass('nav__menu_person'))
        {
            $elemUrl = '/persons';
            showContent();
        } else if ($(this).hasClass('nav__menu_main'))
        {
            $elemUrl = '/';
            showContent();
        } else if ($(this).hasClass('nav__menu_method'))
        {
            $elemUrl = '/methodology';
            showContent();
        } else if ($(this).hasClass('nav__menu_centers'))
        {
            $elemUrl = '/centers';
            showContent();
        } else if ($(this).hasClass('nav__menu_contacts'))
        {
            $elemUrl = '/contacts';
            showContent();
        } else if($(this).hasClass('nav__menu_priceServices'))
        {
            $elemUrl = '/price';
            showContent();
        } else if($(this).hasClass('nav__menu_priceIndividual'))
        {
            $elemUrl = '/individual';
            showContent();
        } else if($(this).hasClass('nav__menu_priceSale'))
        {
            $elemUrl = '/sales';
            showContent();
        } else if($(this).hasClass('nav__menu_problems'))
        {
            $id = $(this).attr('id');
            $elemUrl = '/resolvable/problem/' + $id;
            showContent();
        } else if($(this).hasClass('nav__menu_additional'))
        {
            $id = $(this).attr('id');
            $elemUrl = '/additional/service/' + $id;
            showContent();
        } else if($(this).hasClass('nav__menu_rehab'))
        {
            $elemUrl = '/additional/service/reabilitacionnye-zanyatiya-dlya-invalidov';
            showContent();
        } else if($(this).hasClass('nav__menu_equipment'))
        {
            $elemUrl = '/additional/service/prodazha-trenazherov';
            showContent();
        } else if($(this).hasClass('nav__menu_news'))
        {
            $elemUrl = '/news';
            showContent();
        } else if($(this).hasClass('nav__menu_reviews'))
        {
            $elemUrl = '/reviews';
            showContent();
        } else if($(this).hasClass('nav__menu_rules'))
        {
            $elemUrl = '/rules';
            showContent();
        } else if($(this).hasClass('nav__menu_vacancy'))
        {
            $elemUrl = '/vacancy';
            showContent();
        } else if($(this).hasClass('nav__menu_organizations'))
        {
            $elemUrl = '/organizations';
            showContent();
        } else if($(this).hasClass('nav__menu_radio'))
        {
            $elemUrl = '/radio';
            showContent();
        } 
    });
})

function showContent() {
    $("html, body").stop().animate({scrollTop:0}, 1000);
    location.href = $elemUrl;
}
    