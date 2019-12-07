<div class="content__article decoration__select_none">
    <div class="headline decoration__select_none">
        <span>Дорогие друзья!</span>
    </div>

    <div class="content__article_box">
        <?php

            foreach( $data6 as $row )
            {
                echo 
                    '<div class="content__article_elem">
                        <div class="content__article_body">
                            <span class="content__article_title">
                                <h1>
                                    ' . $row['Title'] . ' 
                                </h1> 
                            </span>
                            <span class="content__article_article">
                                ' . $row['Article'] . '
                            </span>
                        </div>
                        </br>
                    </div>'
                ;
            }
        ?>
    </div>
</div>
