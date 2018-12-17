function $(str){
			if(str.charAt(0)=="#"){
				return document.getElementById(str.substring(1));
			}else if(str.charAt(0)=="."){
				return document.getElementsByClassName(str.substring(1));
			}else{
				return document.getElementsByTagName(str);
			}
		}	
		
		function checkMa(arr,n){
			var str="";
			for(var i=0;i<n;i++){
				 str+=arr[parseInt(Math.random()*arr.length)];
			}
			return str;
		}
		


	function gaibian(type,str){
	var obj={
		"shoujihao":/^[0-9]{11}$/,
		"mima":/^[a-z]{1}[0-9]{7,15}$/i
	
	};
	return obj[type].test(str);

	}
