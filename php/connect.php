<?php

$dbc = mysql_connect($endpoint, $username, $password) or die ("Unable to Connect to MySQL Database");
mysql_select_db($database);

?>