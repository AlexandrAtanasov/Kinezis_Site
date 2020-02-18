<?php
    function checkRoute() {
        $request = $_SERVER['REQUEST_URI'];
        
        //yandex direct exception
        $yandexReg = '/\?yclid=.*$/m';
        //facebook direct exception
        $fbReg = '/\?fbclid=.*$/m';
        //utm exception
        $utmReg = '/\?utm_source=.*$/m';
        
        $yandexRegRes = preg_match($yandexReg, $request);
        $fbRegRes = preg_match($fbReg, $request);
        $utmRegRes = preg_match($utmReg, $request);
        
        if ( $fbRegRes ) {
            // Print the entire match result
            $r = (preg_replace($fbReg, '', $request));
            $routes = explode( '/', $r );
            return $routes;
        };
        
        if ( $yandexRegRes ) {
            $r = (preg_replace($yandexReg, '', $request));
            $routes = explode( '/', $r );
            return $routes;
        };
        
        if ( $utmRegRes ) {
            $r = (preg_replace($utmReg, '', $request));
            $routes = explode( '/', $r );
            return $routes;
        };
        
        if ( $fbRegRes == false && $yandexRegRes == false && $utmRegRes == false ) {
            $routes = explode( '/', $request );
            return $routes;
        };
        return $routes;
    };
?>