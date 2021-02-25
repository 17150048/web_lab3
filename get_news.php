<?php

include 'connect.php';
$kol = $_GET['kol'];
$tek = $_GET['tek'];
$get_news = "SELECT `id`, `head`, `text`, `img` FROM `news` LIMIT $tek, $kol";


$array = [];
if($result = mysqli_query($conn, $get_news)){
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_array($result)){
            $array[] = $row;
        }
    } else{
        echo "Записи не найдены";
    }
} else{
    echo "Ошибка: " . mysqli_error($conn);
}


echo json_encode($array); 


?>