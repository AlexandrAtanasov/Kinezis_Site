<!-- view for persons for a main page -->
<div class="content__person decoration__select_none">
    <div class="headline decoration__select_none">
        <span>Наша команда</span>
    </div>

    <div class="content__person_box person_corousel">
        <?php
            foreach ( $data as $row )
            {
               echo 
                    '<div class="content__person_elem content__person_elem_doctors">
                        <div class="content__person_img">
                            <div class="content__person_img_elem" style="background-image: url(' 
                                . $row['Img'] .
                            ')">
                            </div>
                        </div>
                    
                        <div class="content__person_info">
                            <span class="content__person_fio">'
                                . $row['FirstName'] . ' '
                                . $row['LastName'] . ' 
                            </span> 
                            <p class="content__person_review">' 
                                . $row['About'] . 
                            '</p> <br/>

                            <span class="content__person_review_show decoration__link">Читать далее...</span>
                            
                            <p class="content__person_review_hide">' 
                                . $row['Review'] . 
                            '</p>
                        </div> 
                    </div>';
            }
        ?>
    </div>
</div>

<div class="content__article decoration__select_none" style="margin-top:1rem">
    <div class="content__article_box">
        <div class="content__article_elem">
            <div class="content__article_body">
                <span class="content__article_title">
                    <h1>Знания - сила</h1> 
                </span>
                <span class="content__article_article">
                    Сотрудники центра имеют специальное высшее образование и проходили обучение:
                    <ul>
                        <li>
                            в центре кинезитерапии Бубновского, Россия, г. Москва;
                        </li>
                        <li>
                            в международном реабилитационном центре «Адели», Словакия, г. Пьештяны;
                        </li>
                        <li>
                            в международном центре «WorldClass» Россия, г. Москва.
                        </li>
                    </ul>
                    <br/>
                    <p>
                        Ознакомиться с полным списком сотрудников можно на странице - <a href="/persons">Наша команда</a>
                    </p>
                </span>
            </div>
        </div> 
    </div>
</div>


<!-- <section class="regular slider">
    <div>
      <img src="http://placehold.it/350x300?text=1">
      <p>Information:</p>
      <p>Some text</p>
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=2">
      <p>Information:</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=3">
      <p>Information:</p>
      <p>Some text</p>
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=4">
      <p>Information:</p>
      <p>Some text</p>
      <p>Some text</p>
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=5">
      <p>Information:</p>
      <p>Some text</p>
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=6">
      <p>Information:</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </section> -->
