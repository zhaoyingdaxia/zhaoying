<?php
		header("Content-type:text/html;charset=utf-8");
		$name=$_GET['name'];
		$password=$_GET['password'];
		$conn=mysql_connect("localhost","root","root");
		if(!$conn){
		//die("连接失败".mysql_error());
		}else{
			mysql_select_db("zhaoying",$conn);
			$sqlstr ="select * from zhaoyingdaxia where name='$name'";

			$result = mysql_query($sqlstr,$conn);
		//mysql_close($conn);
			if(mysql_num_rows($result)==0){	
				$sqlstr1 = "insert into zhaoyingdaxia(name,password)values('$name','$password')";
				$result1 = mysql_query($sqlstr1,$conn);
				mysql_close($conn);
				if($result1==1){
					echo "0";
				}else{
					echo "注册失败，请重新<a href='zhuce.html'>注册</a>";
				}				
			}else{
				echo "1";
			}			
	}	
?>