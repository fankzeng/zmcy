<?php
	$url = 'http://115.28.54.40:8080/beautyideaInterface/api/v1/user_tag/get_tag';
	//$url = 'http://115.28.54.40:8080/beautyideaInterface/api/v1/resources/getResources?imieId=771151417E03687F75D855F69DA18724&pageNo=1&pageSize=2';
	$res = file_get_contents($url);
	echo $_GET['callback'].'('.$res.')';
	//echo $res;
?>
