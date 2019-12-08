<div class="content__article decoration__select_none">
    <div class="headline decoration__select_none">
        <span>Авторская колонка</span>
    </div>

    <div class="content__article_box">
        <?php
            foreach ($data as $row)
            if ($row["Img"])
            {
                echo 
                    '
                    <div class="content__article_elem">
                       
                        <div class="content__article_body">
                            <span class="content__article_title">
                                <h1>
                                    ' . $row['Title'] . ' 
                                </h1> 
                            </span>

                            <span class="content__article_subtitle">
                                <h2>
                                    ' . $row['SubTitle'] . '
                                </h2> 
                            </span>

                            <span class="content__article_article">
                                ' . $row['Article'] . '
                            </span>
                        </div>
                        </br>

                        <div class="content__person_img" style="width:90%; max-height: 70vh; overflow: hidden;">
                            <div class="content__person_img_elem" style="background-image: url(
                                ' . $row['Img'] . '
                            )"></div>
                        </div>

                    </div>
                    ';
            } 
            else 
            { 
                echo
                    '
                    <div class="content__article_elem">

                        <div class="content__article_body">
                            <span class="content__article_title">
                                <h1>
                                    ' . $row['Title'] . ' 
                                </h1> 
                            </span>

                            <span class="content__article_subtitle">
                                <h2>
                                    ' . $row['SubTitle'] . '
                                </h2> 
                            </span>

                            <span class="content__article_article">
                                ' . $row['Article'] . '
                            </span>
                        </div>

                    </div>
                    '
                ;
            };

        ?>

    </div>
</div>