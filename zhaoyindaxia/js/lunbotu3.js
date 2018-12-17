
function $(str){
			if(str.charAt(0)=="#"){
				return document.getElementById(str.substring(1));
			}else if(str.charAt(0)=="."){
				return document.getELementsByClassName(str.substring(1));
			}else{
				return document.getElementsByTagName(str);
			}
		}	
//		window.onload = function(){
			
		let currIndex1 = 0;



			function autPlay3(){

				mytime = setInterval(function(){
					let outIndex = currIndex1;
					currIndex1=currIndex1+1;
					if(currIndex1>1){
						currIndex1=0; 
					}
					showing1(outIndex,currIndex1,$("#xiaozhong"));
	

				},4000)
			}

	function showing1(outIndex,inIndex,idname){
	//console.log(outIndex,inIndex);
	//3、改变外观
	//1)、改图片
	let imgs = idname.children;
	for(let i=0;i<imgs.length-1;i++){
		imgs[i].style.zIndex = 0;
	}
	imgs[inIndex].style.zIndex = 1;
	//让inIndex淡入
	linearMove03(imgs[inIndex],"left",1050,0,800);
//	fadeIn(imgs[inIndex],1000);
	//让outIndex淡出
	linearMove03(imgs[outIndex],"left",0,-1050,800);
//	fadeOut(imgs[outIndex],1000);
//	fadeInOut(imgs[outIndex],imgs[inIndex],1000);
//	2)、改豆豆
	let lis = idname.lastElementChild.children;
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = "#cacad2";
	}
	lis[currIndex1].style.backgroundColor = "#6d970d";
	
}
			function goimg1(transIndex){
				let outIndex = currIndex1;
				currIndex1=transIndex;
				// 边界处理
				if(currIndex1>1||currIndex1<0){
					currIndex1 =0;
				}
				// 改变外观
				showing1(outIndex,currIndex1,$("#xiaozhong"));

}





		


			function stop1(){
				if(mytime!=null){
					window.clearInterval(mytime);
					mytime=null;
				}
			}
		
//	


//			
//}
