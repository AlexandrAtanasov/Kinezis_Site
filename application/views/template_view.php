<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
   
    <meta name="keywords" content="" />
   
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="yandex-verification" content="ed7b8f4c2b6ac961" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <?php include(__DIR__ . '/title_and_descriptions_of_pages_view.php'); ?>

    <link rel="icon" type="image/png" href="/../assets/images/logo/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="../../application/css/style.css?v=20191202">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="//code.jivosite.com/widget.js" data-jv-id="j5UxZwUNyF" async></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149278926-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-149278926-1');
    </script>
    <!-- /Google Analytics -->
</head>
<body>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
       m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
       ym(54928126, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
       });
    </script>
<noscript><div><img src="https://mc.yandex.ru/watch/54928126" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

	<?php
		include(__DIR__ . '/main_header.php');
		include(__DIR__ . '/main_navigation.php');
		include(__DIR__ . '/main_content_start.php');

		include(__DIR__ . '/../views/' . $content_view);

        include(__DIR__ . '/../html/main__content_stop.html');
        include(__DIR__ . '/../html/footer.html');
        include(__DIR__ . '/overlay_callback.php');
        include(__DIR__ . '/main_overlay_navigation.php');
        include(__DIR__ . '/main_overlay_telephone.php');
        include(__DIR__ . '/../html/overlay_slider.html');
	?>
    
    <script src="../../application/js/script.js"></script>

    </body>
</html>