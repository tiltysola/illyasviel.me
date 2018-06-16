if(IsPC()){
	/* 鼠标点击特效 */
	var a_idx = 0;
	jQuery(document).ready(function($) {
	    $("body").mousedown(function(e) {
			var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
			var $i = $("<span/>").text(a[a_idx]);
	        a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
	        y = e.pageY;
	        $i.css({
				"z-index": 999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": "#ff2233",
				"font-size": "14px"
	        });
	        $("body").append($i);
	        $i.animate({
				"top": y - 180,
				"opacity": 0
	        },
	        1500,
			function() {
	            $i.remove();
	        });
	    });
	});
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