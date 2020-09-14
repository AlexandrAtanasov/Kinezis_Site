<!-- start callback overlay window -->
<div class="overlay__content_container overlay__hide">

    <div class="overlay__content_buttonBox decoration__select_none">
        <div class="overlay__content_buttonClose">
            <i class="fas fa-times"></i>
            <span class="overlay__content_button_text">Закрыть</span>
        </div>
    </div>

    <div class="overlay__content_callbackForm">
        <div class="overlay__content_form">
            <form method='post' target="blank" action='' class="overlay__content_form_elem">
                    <legend class="overlay__content_form_title decoration__select_none">Оставьте свои данные и мы Вам перезвоним!</legend>
                    <br/>
            
                    <input type='text' name='name' placeholder='Ваше имя' class="form__input_field_name">
                    <br/>
                    
                    <input type='tel' name='number' placeholder='Ваш номер телефона' class="form__input_field_number">
                    <br/>
                    
                    <legend class="overlay__content_form_title decoration__select_none">Выберите ближайший центр:</legend>
                    <div class="overlay__content_form_adresses">
                        <p><input class="overlay__content_form_radio" type="radio" name="center" value="Крупской, 31" id="Krupskoy"><label for="Krupskoy" class="overlay__content_form_radio">Крупской, 31</label></p>
                        <p><input class="overlay__content_form_radio" type="radio" name="center" value="Ленина, 87" id="Lenina"><label for="Lenina" class="overlay__content_form_radio">Ленина, 87</label></p>
                        <p><input class="overlay__content_form_radio" type="radio" name="center" value="Маршала Рыбалко, 85В" id="MRybalko"><label for="MRybalko" class="overlay__content_form_radio">Маршала Рыбалко, 85В</label></p>
                    </div>
            
                    <div class="g-recaptcha" data-sitekey="6LcPOrMUAAAAALXecANy9zxnDZHD_oxv7L8D1rP4"></div>
                    <br/>
                    
                    <input type='submit' name='enter' value='Перезвоните мне!' class="form__input_submit"><br>
                    <br/>
            </form>

        </div>
        
        <br/>
        <p class="overlay__content_politica">
            Нажимая на кнопку, вы даете согласие на обработку своих персональных данных в соответствие с 
            <a href="/../../assets/download/Politika-v-otnoshenii-obrabotki-personalnykh-dannykh-OOO-KINEZIS.pdf" class='download__link_visitingRules'>
                принятой политикой в отношении обработки персональных данных
            </a>
        </p>

    </div>

</div>