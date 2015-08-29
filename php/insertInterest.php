<?php

include ("account.php");
include ("connect.php");

if (empty($_POST['EMAIL'])) {
	exit("emailEmpty");
}

$query = 'INSERT INTO INTERESTS VALUES ("", '.$_POST['EMAIL'].', "");';

mysql_query($query) OR die("ERROR");

print("SUCCESS");

mysql_close();

?>
