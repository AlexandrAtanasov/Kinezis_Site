<div class="content__article decoration__select_none">
    
    <div class="headline decoration__select_none">
        <!-- <br/> -->
        <span style="font-family: 'Bad Script', cursive;">Здоровье спины и суставов без лекарств и операций!</span>
    </div>
        <!-- <br/> -->

    <div class="content__article_box">
        <div class="content__article_elem content__article_carousel lazy">
        
        </div>
    </div>

    <ul class="content__carousel_img" style="display:none;">
        <?php
            foreach( $data5 as $row )
            {
                echo 
                    '<li class="content__carousel_img_src">'
                        . $row['Img'] .
                    '</li>';
            }
        ?>
    </ul>

</div>