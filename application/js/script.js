function removeHeaderClasses(){$("header").removeClass("scroll__menu_mobile"),$("header > div.scroll__menu_element").removeClass("scroll__menu_element_fix")}function removeNavClasses(){$("nav").removeClass("scroll__menu_box"),$("nav > div.scroll__menu_element").removeClass("scroll__menu_element_fix")}function removeAllClasses(){removeHeaderClasses(),removeNavClasses()}function showContent(){$("html, body").stop().animate({scrollTop:0},1e3),location.href=$elemUrl}function openTelephoneMenu(){event.stopPropagation(),event.stopImmediatePropagation(),$(".overlay__menu_telephone_container").toggleClass("overlay__hide"),$(".overlay__blur").toggleClass("overlay__blur_hidden"),$("html, body").stop().animate({scrollTop:0},500)}function openCallbackMenu(){event.stopPropagation(),event.stopImmediatePropagation(),$(".overlay__content_container").toggleClass("overlay__hide"),$(".overlay__blur").toggleClass("blur"),$(".overlay__blur").toggleClass("overlay__blur_hidden")}$(document).ready(function(){$(".nav_container > .nav__menu_list > li").on({mouseenter:function(){$(this).find(">ul").stop().slideToggle(300)},mouseleave:function(){$(this).find(">ul").stop().slideToggle(300)}}),$(".overlay__menu_container > .overlay__menu_nav > .nav__menu_list > li").on({click:function(){$(this).parent().find("ul").stop().slideUp(300),$(this).find("+ul").stop().slideToggle(300)}})}),$(document).ready(function(){$(document).ready(function(){window.matchMedia("screen and (min-width: 1131px)").matches?($(".header__callback_button").removeClass("mobile"),$(".header__callback_button").addClass("desktop")):window.matchMedia("screen and (max-width: 1130px)").matches?(removeNavClasses(),$(".header__callback_button").removeClass("desktop"),$(".header__callback_button").addClass("mobile")):console.log("error")}),$(window).on("resize",function(){window.matchMedia("screen and (min-width: 1131px)").matches?(removeHeaderClasses(),$(".header__callback_button").removeClass("mobile"),$(".header__callback_button").addClass("desktop")):window.matchMedia("screen and (max-width: 1130px)").matches?(removeNavClasses(),$(".header__callback_button").removeClass("desktop"),$(".header__callback_button").addClass("mobile")):removeAllClasses()}),$(window).on("scroll",function(){if(window.matchMedia("screen and (min-width: 1131px)").matches){$("nav").addClass("scroll__menu_box");var e=$(".scroll__menu_box").offset().top;$(this).scrollTop()>e?$("nav.scroll__menu_box > .scroll__menu_element").addClass("scroll__menu_element_fix"):$("nav.scroll__menu_box > .scroll__menu_element").removeClass("scroll__menu_element_fix")}else if(window.matchMedia("screen and (max-width: 1130px)").matches){$("header").addClass("scroll__menu_mobile");e=$(".scroll__menu_mobile").offset().top;$(this).scrollTop()>e?$("header.scroll__menu_mobile > .scroll__menu_element").addClass("scroll__menu_element_fix"):$("header.scroll__menu_mobile > .scroll__menu_element").removeClass("scroll__menu_element_fix")}else removeAllClasses()})}),$(document).ready(function(){$(this).on("click","li",function(e){$(this).hasClass("nav__menu_person")?($elemUrl="/persons",showContent()):$(this).hasClass("nav__menu_main")?($elemUrl="/",showContent()):$(this).hasClass("nav__menu_method")?($elemUrl="/methodology",showContent()):$(this).hasClass("nav__menu_centers")?($elemUrl="/centers",showContent()):$(this).hasClass("nav__menu_contacts")?($elemUrl="/contacts",showContent()):$(this).hasClass("nav__menu_priceServices")?($elemUrl="/price",showContent()):$(this).hasClass("nav__menu_priceIndividual")?($elemUrl="/individual",showContent()):$(this).hasClass("nav__menu_priceSale")?($elemUrl="/sales",showContent()):$(this).hasClass("nav__menu_problems")?($id=$(this).attr("id"),$elemUrl="/resolvable/problem/"+$id,showContent()):$(this).hasClass("nav__menu_additional")?($id=$(this).attr("id"),$elemUrl="/additional/service/"+$id,showContent()):$(this).hasClass("nav__menu_rehab")?($elemUrl="/additional/service/reabilitacionnye-zanyatiya-dlya-invalidov",showContent()):$(this).hasClass("nav__menu_equipment")?($elemUrl="/additional/service/prodazha-trenazherov",showContent()):$(this).hasClass("nav__menu_news")?($elemUrl="/news",showContent()):$(this).hasClass("nav__menu_reviews")?($elemUrl="/reviews",showContent()):$(this).hasClass("nav__menu_rules")?($elemUrl="/rules",showContent()):$(this).hasClass("nav__menu_vacancy")?($elemUrl="/vacancy",showContent()):$(this).hasClass("nav__menu_organizations")?($elemUrl="/organizations",showContent()):$(this).hasClass("nav__menu_radio")&&($elemUrl="/radio",showContent())})}),$(document).ready(function(){$(".header__menu_box button").on("click",function(e){e.stopPropagation(),e.stopImmediatePropagation(),$(".overlay__menu_container").toggleClass("overlay__hide"),$(".overlay__blur").toggleClass("overlay__blur_hidden"),$("html, body").stop().animate({scrollTop:0},500)}),$(".overlay__menu_container .overlay__menu_buttonClose").on("click",function(e){e.stopPropagation(),e.stopImmediatePropagation(),$(".overlay__menu_container").toggleClass("overlay__hide"),$(".overlay__blur").toggleClass("overlay__blur_hidden")}),$(".header__callphone_box button").on("click",function(e){$(this).hasClass("mobile")?openTelephoneMenu():$(this).hasClass("desktop")?openCallbackMenu():console.log("irreplaceable screen size")}),$(".overlay__menu_telephone_container .overlay__menu_buttonClose").on("click",function(e){e.stopPropagation(),e.stopImmediatePropagation(),$(".overlay__menu_telephone_container").toggleClass("overlay__hide"),$(".overlay__blur").toggleClass("overlay__blur_hidden")}),$("li.header__callback_box").on("click",function(e){e.stopPropagation(),e.stopImmediatePropagation(),$(".overlay__menu_telephone_container").toggleClass("overlay__hide"),$(".overlay__content_container").toggleClass("overlay__hide")}),$(".overlay__content_container .overlay__content_buttonClose").on("click",function(e){e.stopPropagation(),e.stopImmediatePropagation(),$(".overlay__content_container").toggleClass("overlay__hide"),$(".overlay__blur").toggleClass("overlay__blur_hidden"),$(".header__callphone_box button.header__callback_button").hasClass("desktop")&&$(".overlay__blur").toggleClass("blur")})}),$(document).ready(function(){$(".overlay__content_form_elem").submit(function(){var e=$(".form__input_field_name").val(),n=$(".form__input_field_number").val();if(""==e||""==n)return alert("Пожалуйста, заполните все поля, чтобы мы могли Вам перезвонить"),!1;var o=this,l=$(this).serialize();return $.ajax({method:"POST",url:"/sendform",data:l}).done(function(e){alert(e),o.reset()}).fail(function(){alert("Ошибка заполнения данных")}),!1})}),function(){var e=$(".overlay__slider_container .overlay__slider_elem"),n=$("<div>",{class:"overlay__slider_nav",css:{display:"none"}}),o=$("<div>",{class:"slider__box"}),l=$("<div>",{class:"slider__box_button"}),a=$("<div>",{class:"slider__box_button"}),t=$("<div>",{class:"slider__box_img"}),s=$("<i>",{class:"fas fa-arrow-left slider__button_backward"}),_=$("<i>",{class:"fas fa-arrow-right slider__button_forward"}),r=$("<img>",{class:"slider__elem_img",src:""});$(n).append(o),$(l).append(s),$(a).append(_),$(t).append(r),$(o).append(l,t,a),$(e).prepend(n)}(),document.addEventListener("DOMContentLoaded",function(e){for(var t=document.getElementsByClassName("slider__elem_img"),l=[],s=-1,n=document.getElementsByClassName("content__article_img_elem"),o=0;o<n.length;o++)n[o].addEventListener("click",function(){_(this.parentNode.parentNode.getElementsByClassName("content__article_img_elem")),a(l,this)});function a(e,n){for(var o=n,l=(o.currentStyle||getComputedStyle(o,!1)).backgroundImage.slice(4,-2).replace(/.*\/images\//g,"/../assets/images/"),a=0;a<e.length;a++)l==e[a]&&(s=a);return t[0].src=e[s],s}function _(e){for(var n=0;n<e.length;n++){var o=(e[n].currentStyle||window.getComputedStyle(e[n],!1)).backgroundImage.slice(4,-2).replace(/.*\/images\//g,"/../assets/images/");l[n]=o}}document.getElementsByClassName("slider__button_forward")[0].addEventListener("click",function(){return s=function(e){return s+1>e.length-1?s=0:s+=1,s}(l),t[0].src=l[s],s}),document.getElementsByClassName("slider__button_backward")[0].addEventListener("click",function(){return s=function(e){return s-1<0?s=e.length-1:s-=1,s}(l),t[0].src=l[s],s})}),$(document).ready(function(){$(".slider__open").on("click",function(e){$(".overlay__slider_nav").css({display:"block"}),e.stopPropagation(),e.stopImmediatePropagation(),$(".overlay__slider_container").toggleClass("overlay__hide"),$(".overlay__blur").toggleClass("blur"),$("body").toggleClass("body_overflow")}),$(".overlay__slider_buttonClose").on("click",function(e){e.stopPropagation(),e.stopImmediatePropagation(),$(".overlay__slider_container").toggleClass("overlay__hide"),$(".overlay__blur").toggleClass("blur"),$("body").toggleClass("body_overflow")})}),document.addEventListener("DOMContentLoaded",function(){var e,a=[];!function(){if($("div").hasClass("content__elem_carousel"))if(function(){e=document.querySelectorAll(".carousel__elem"),window.matchMedia("screen and (max-width: 910px)").matches&&function(e){for(var n=/.*mobile_.*/m,o=0,l=0;l<e.length;l++)n.exec(e[l].innerHTML)&&(a[o]=e[l].innerHTML,o++)}(e);window.matchMedia("screen and (min-width: 911px)").matches&&function(e){for(var n=/.*big_.*/m,o=0,l=0;l<e.length;l++)n.exec(e[l].innerHTML)&&(a[o]=e[l].innerHTML,o++)}(e)}(),1!=a.length){var n=0;setTimeout(function e(){document.querySelector(".content__elem_carousel").style.backgroundImage="url('"+a[n]+"')",n<a.length-1?n++:n=0,document.querySelector(".content__elem_carousel").classList.remove("content__elem_carousel_hide"),document.querySelector(".content__elem_carousel").classList.add("content__elem_carousel_show"),setTimeout(function(){document.querySelector(".content__elem_carousel").classList.remove("content__elem_carousel_show"),document.querySelector(".content__elem_carousel").classList.add("content__elem_carousel_hide")},3500),setTimeout(e,4e3)},4)}else document.querySelector(".content__elem_carousel").style.backgroundImage="url('"+a[0]+"')"}()}());