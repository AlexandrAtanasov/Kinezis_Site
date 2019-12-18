<?php

    class Model_Sendform extends Model
    {
        public function get_data()
        {
            require __DIR__ . "/../core/config.php";
       
            $key = $captcha_key;
            $name = $_POST['name'];
            $number = $_POST['number'];
            $center = $_POST['center'];
            $url = 'https://www.google.com/recaptcha/api/siteverify';
           
            $query = $url . '?secret=' . $key . '&response=' . $_POST['g-recaptcha-response'] . '&remoteip=' . $_SERVER['REMOTE_ADDR'];
            $dataG = json_decode(file_get_contents($query));

            if (!$_POST['g-recaptcha-response'])
            {
                echo('Подтвердите, что Вы не робот');
            } 
            elseif ($dataG->success == false)
            {
                echo ('Подтверждение не пройдено');
            } 
            elseif  ( isset($name)&&($name!='')&&isset($number)&&($number!='')&&(isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']!='') ) 
            {
                $toAdmin = $emailAddress;
                $subjCallback = 'Заявка с сайта kinezis59.ru';
                $headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
                $headers .= "From: info@kinezis59.ru\r\n"; 
                $headers .= "Reply-To: atanasovalexandr@yandex.ru\r\n"; 
                $message = 'Имя: ' . $name . '. ' . "<br>";
                $message .= 'Номер телефона: ' . $number . '. ' . "<br>";
                $message .= 'Адрес: ' . $center . '. ' . "<br><br>";
                $message .= 'Отправлено с сайта "КИНЕЗИС"';
                mail($toAdmin, $subjCallback, $message, $headers);
                echo ($name . ", мы скоро Вам перезвоним!");
            } 
            else 
            {
                echo 'Сервис временно недоступен';
            }
        }
    }

?>