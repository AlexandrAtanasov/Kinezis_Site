<?php 
    include(__DIR__ . '/../core/pages_info.php'); 
    // include(__DIR__ . '/../models/model_pages_info.php');
    // $PageInfo = Pages_Info::getInfo();
    if ($PageInfo) 
    {
        foreach( $PageInfo as $row )
        {
            echo '
                <title>'.$row['Title'].' | Кинезис - сеть центров кинезитерапии</title>
                <meta name="description" content="'.$row['Description'].'"/>
            ';
        };
    } else {
        echo ('
        <title>Кинезис - сеть центров кинезитерапии</title>
        <meta name="description" content="Кинезис - центры кинезитерапии в Перми на Екатерининской 165, Крупской 31 и М.Рыбалко 85в. Центр кинезитерапии КИНЕЗИС - клиническая база Кафедры медицинской реабилитации и спортивной медицины ПГМУ им. академика Е.А. Вагнера."/>
    ');
    }

?>

