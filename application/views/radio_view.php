<div class="content__article decoration__select_none">
    <div class="headline decoration__select_none">
        <span>Радиопередачи</span>
    </div>

    <div class="content__article_box">
        <?php
            foreach( $data as $row )
            {
                echo 
                    '<div class="content__article_elem">
                    
                        <div class="content__article_body">
                            <p class="content__article_date">
                                ' . $row['Title'] . '
                            </p>
                            <span class="content__article_article">
                            ' . $row['Description'] . '
                            </span>
                            <audio controls src="' . $row['Content'] . '"></audio>
                        </div>
                            
                    </div>'
                ;
            }
                        
        ?>
    </div>
</div>
