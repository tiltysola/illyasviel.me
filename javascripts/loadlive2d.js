if(IsPC()){
	model = "//oss.acgme.cn/live2d/model/ylia/Ylia02.model.json";
	loadlive2d("live2d", model);
	x = document.getElementById("live2d");
	y = document.getElementById("illyaogg");
	x.onclick = function(){y.currentTime = 0;y.play();}
}

function IsPC() {
   var userAgentInfo = navigator.userAgent;
   var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
         flag = false;
         break;
      }
   }
   return flag;
}