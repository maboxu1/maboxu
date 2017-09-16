<?php 

	$username = @$_GET["userID"];
	$password = @$_GET["password"];

	if($username == "Westbrook"){
		if($password == "123123"){
			echo 1;
		}else{
			echo 0;
		}
	}else{
		echo 2;
	}



 ?>