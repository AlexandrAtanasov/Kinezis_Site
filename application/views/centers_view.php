<div class="content__article decoration__select_none">
    <div class="headline decoration__select_none">
        <span>О центрах</span>
    </div>

    <div class="content__article_box">
        <?php

            foreach ($data as $row)
            {
                $basic = '<div class="content__article_elem">';
                $image = 
                    '<div class="content__article_img">
                        <div class="content__article_img_elem" style="background-image: url('
                            . $row["Img"] 
                            . ')">
                        </div>
                    </div>';
                $text = 
                        '<div class="content__article_body">

                            <span class="content__article_title">
                                <h1>'
                                . $row['Title']
                            . ' </h1> 
                            </span>
                            <span class="content__article_article">'
                                . $row['Article']
                            . '</span>
                        </div>
                    </div>'
                ;

                if (!$row['Img']) {
                    echo $basic . $text;
                } else {
                    echo $basic . $image . $text;
                };
            }
        ?>
    </div>
</div>