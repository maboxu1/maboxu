<?php 

	$ten =
			 	'[
					{"img":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1795711676,3185248301&fm=26&gp=0.jpg"},
					{"img":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2354473722,3877483669&fm=26&gp=0.jpg"},
					{"img":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3652787676,1742890403&fm=11&gp=0.jpg"},
					{"img":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3668990441,273604842&fm=26&gp=0.jpg"},
					{"img":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1372711853,1540371657&fm=11&gp=0.jpg"},
					{"img":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1287861130,1806147584&fm=11&gp=0.jpg"},
					{"img":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1674358210,1905624706&fm=26&gp=0.jpg"},
					{"img":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3250555880,684357470&fm=26&gp=0.jpg"},
					{"img":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2429645542,4057018750&fm=11&gp=0.jpg"},
					{"img":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3258108346,3677605297&fm=11&gp=0.jpg"}
				]';

	$five = 
				'[
					{"img":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1795711676,3185248301&fm=26&gp=0.jpg"},
					{"img":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2354473722,3877483669&fm=26&gp=0.jpg"},
					{"img":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3652787676,1742890403&fm=11&gp=0.jpg"},
					{"img":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3668990441,273604842&fm=26&gp=0.jpg"},
					{"img":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1372711853,1540371657&fm=11&gp=0.jpg"}
				]';

	if(@$_GET["row"] == 1){
		echo $five;
	}

	if(@$_GET["row"]== 2){
		echo $ten;
	}

 ?>