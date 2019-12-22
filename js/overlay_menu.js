// TODO: make normal names for scripts

$(document).ready(function() {
	// for mobile menu button
    $(".header__menu_box button").on('click', function (event) { 
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__menu_container").toggleClass("overlay__hide");
		$(".overlay__blur").toggleClass("overlay__blur_hidden");
		$("html, body").stop().animate({scrollTop:0}, 500);
		//TODO: Delete this after 31.12 or create a separate js
		newyearHide();
	});
	$(".overlay__menu_container .overlay__menu_buttonClose").on('click', function (event){
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__menu_container").toggleClass("overlay__hide");
		$(".overlay__blur").toggleClass("overlay__blur_hidden");
		//TODO: Delete this after 31.12 or create a separate js
		newyearHide();
	});

	// for telephone menu button on header
    $(".header__callphone_box button").on('click', function (event) { 
		if ($(this).hasClass("mobile")) 
		{
			openTelephoneMenu();
			// console.log('mobile', $(this).hasClass("mobile"))

			//TODO: Delete this after 31.12 or create a separate js
			newyearHide();
		}
		else if ($(this).hasClass("desktop"))
		{
			openCallbackMenu();
			// console.log("desktop", $(this).hasClass("desktop"))

			//TODO: Delete this after 31.12 or create a separate js
			newyearHide();
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
		//TODO: Delete this after 31.12 or create a separate js
		newyearHide();
	});

	// for callback button
	$(".header__callback_box").on('click', function (event) { 
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__menu_telephone_container").toggleClass("overlay__hide");
		$(".overlay__content_container").toggleClass("overlay__hide");
		// $(".overlay__blur").toggleClass("blur");
		// $(".overlay__blur").toggleClass("overlay__blur_hidden");

		//TODO: Delete this after 31.12 or create a separate js
		// newyearHide();
	});
	$(".overlay__content_container .overlay__content_buttonClose").on('click', function (event){
		event.stopPropagation();
		event.stopImmediatePropagation();
		$(".overlay__content_container").toggleClass("overlay__hide");
		$(".overlay__blur").toggleClass("overlay__blur_hidden");
		
		//TODO: Delete this after 31.12 or create a separate js
		newyearHide();

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

function newyearHide()
{
	$(".b-page_newyear").toggleClass("b-page__content_hide");
};
