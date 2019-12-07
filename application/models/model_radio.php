<?php

    class Model_Radio extends Model
    {
        public function get_data()
        {
            $pdo = null;
            $result = null;
            require __DIR__ . '/../core/std_incl.php';

            $pdo->query("SET CHARACTER SET 'utf8'");
            
            $result = $pdo->query("SELECT
                `Title`, `Description`, `Content` 
            FROM `data_radio` ORDER BY `id` DESC;");
            return $result;
        }
    }

?>