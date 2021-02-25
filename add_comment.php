<?php

include 'connect.php';

if (count($_POST) > 0){
  $sql_add = "INSERT INTO comments SET `name`='" . $_POST['name']."', `text`='".$_POST['text']."'";
  @mysqli_query($conn, $sql_add);
}


?>