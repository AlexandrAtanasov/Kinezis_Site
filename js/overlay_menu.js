// TODO: make normal names for scripts

$(document).ready(function() {
	// for mobile menu button
    $(".header__menu_box button").on('click', function (event) { 
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__menu_container").toggleClass("overlay__hide");
		$(".overlay__blur").toggleClass("overlay__blur_hidden");
		$("html, body").stop().animate({scrollTop:0}, 500);
	});
	$(".overlay__menu_container .overlay__menu_buttonClose").on('click', function (event){
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__menu_container").toggleClass("overlay__hide");
		$(".overlay__blur").toggleClass("overlay__blur_hidden");
	});

	// for telephone menu button on header
    $(".header__callphone_box button").on('click', function (event) { 
		if ($(this).hasClass("mobile")) 
		{
			openTelephoneMenu();
			// console.log('mobile', $(this).hasClass("mobile"))
		}
		else if ($(this).hasClass("desktop"))
		{
			openCallbackMenu();
			// console.log("desktop", $(this).hasClass("desktop"))
		}
		else 
		{
			console.log('irreplaceable screen size');
		};
	});
	$(".overlay__menu_telephone_container .overlay__menu_buttonClose").on('click', function (event){
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__menu_telephone_container").toggleClass("overlay__hide");
		$(".overlay__blur").toggleClass("overlay__blur_hidden");
	});

	// for callback button
	$("li.header__callback_box").on('click', function (event) { 
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__menu_telephone_container").toggleClass("overlay__hide");
		$(".overlay__content_container").toggleClass("overlay__hide");
		// $(".overlay__blur").toggleClass("blur");
		// $(".overlay__blur").toggleClass("overlay__blur_hidden");
	});
	$(".overlay__content_container .overlay__content_buttonClose").on('click', function (event){
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__content_container").toggleClass("overlay__hide");
		$(".overlay__blur").toggleClass("overlay__blur_hidden");
		if ($(".header__callphone_box button.header__callback_button").hasClass("desktop"))
		{
			$(".overlay__blur").toggleClass("blur");
		};
	})
}
)

function openTelephoneMenu() 
{
	event.stopPropagation();
	event.stopImmediatePropagation();
	$(".overlay__menu_telephone_container").toggleClass("overlay__hide");
	$(".overlay__blur").toggleClass("overlay__blur_hidden");
	$("html, body").stop().animate({scrollTop:0}, 500);
};

function openCallbackMenu()
{
	event.stopPropagation();
	event.stopImmediatePropagation();
	$(".overlay__content_container").toggleClass("overlay__hide");
	$(".overlay__blur").toggleClass("blur");
	$(".overlay__blur").toggleClass("overlay__blur_hidden");
};
