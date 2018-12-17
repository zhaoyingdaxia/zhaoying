
function $(str){
			if(str.charAt(0)=="#"){
				return document.getElementById(str.substring(1));
			}else if(str.charAt(0)=="."){
				return document.getELementsByClassName(str.substring(1));
			}else{
				return document.getElementsByTagName(str);
			}
		}	
		let currIndex = 0;
		function autPlay2(){

			mytime = setInterval(function(){
				let outIndex = currIndex;
				currIndex=currIndex+1;
				if(currIndex>1){
					currIndex=0; 
				}
				showing(outIndex,currIndex,$("#zhong"));
		
		
			},8000)
		}

	function showing(outIndex,inIndex,idname){
	//console.log(outIndex,inIndex);
	//3、改变外观
	//1)、改图片
	let imgs = idname.children;
	for(let i=0;i<imgs.length-1;i++){
		imgs[i].style.zIndex = 0;
	}
	imgs[inIndex].style.zIndex = 1;
	//让inIndex淡入
	
	linearMove03(imgs[inIndex],"left",1099,0,300);
//	fadeIn(imgs[inIndex],1000);
	//让outIndex淡出
	linearMove03(imgs[outIndex],"left",0,-1099,300);
//	fadeOut(imgs[outIndex],1000);
//	fadeInOut(imgs[outIndex],imgs[inIndex],1000);
//	2)、改豆豆
	let lis = idname.lastElementChild.children;
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = "#cacad2";
	}
	lis[currIndex].style.backgroundColor = "#6d970d";
	
}
			function goimg(transIndex){
				let outIndex = currIndex;

				currIndex=transIndex;
				// 边界处理
				if(currIndex>1||currIndex<0){
					currIndex =0;
				}
				

				// 改变外观
				showing(outIndex,currIndex,$("#zhong"));
				



}





		


			function stop(){
				if(mytime!=null){
					window.clearInterval(mytime);
					mytime=null;
				}
			}
		
//	



//
//	
//window.onload = function(){
//	//1、流程
//	
//	let s1 = new Slider({
//		boxDom:$("#box"),
//		width:1099,
//		height:497,
//		imgs:["../img/1.jpg","../img/2.jpg","../img/3.jpg","../img/4.jpg"],
//		btnColor:"#5c712c",
//		btnHighColor:'#89ac2e',
//		btnSize:10,
//		isCircle:true,
//		timeSpace:3000,
//		isAutoPlay:true,
//		
//	});
//
//				autPlay();
//				let lis=$("#zhong").lastElementChild.children;
//				for(var i=0;i<lis.length;i++){
//					lis[i].setAttribute("index",i);
//					lis[i].onclick =function(){
//						goimg(parseInt(this.getAttribute("index")))
//					}
//				}
//
//				$("#zhong").onmouseover=stop;
//				$("#zhong").onmouseout=autPlay;
//
//				
//			}



