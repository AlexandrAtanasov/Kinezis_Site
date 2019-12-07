<?php

    class Controller_Radio extends Controller
    {
        public function __construct()
        {
            $this -> model = new Model_Radio();
            $this -> view = new View();
        }

        function action_index()
        {
            $data = $this -> model -> get_data();
            $this -> view -> generate('radio_view.php', 'template_view.php', $data);
        } 
    }
?>