function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
		// function shoutu(){
		// var arr1=$(".xuanxiangka")[0].firstElementChild.children;
		// var arr2=$(".xuanxiangka")[0].lastElementChild.children;
		
		// for(var i=0;i<arr1.length;i++){
		// 	arr1[i].index=i;
		// 	arr1[i].onmouseover=func;
		// }
		// }
		// function func(){
		// 	for(var j=0;j<arr2.length;j++){
		// 		arr1[j].id="";
		// 		arr2[j].style.display="none";
		// 	}
		// 	arr1[this.index].id="#dibutu1";
		// 	arr2[this.index].style.display="block";
		// }
	var shoutu = $(".shoutu")[0].children;
	var dibutu = $(".dibutu")[0].children;
	for(let i = 0; i < dibutu.length; i ++){
		dibutu[i].setAttribute("index",i);
		dibutu[i].onmouseover = show;
	}

	function show(){
		let index = this.getAttribute("index");
		for(let i = 0; i < shoutu.length; i ++){
			shoutu[i].id = "";
		}
		shoutu[index].id = "dibutu1";
	}


