window.onload = function(){
    showHtml();
    function showHtml(){
        $("body").addClass("body_slide_in");
        setTimeout(function(){showRightBar()},2000);
    }
    function showRightBar(){
    	if(document.body.clientWidth>715){
    		$(".rightbar").addClass("rightbar_slide_in");
    		$(".rightbar").removeClass("rightbar_slide_out");
    		setTimeout(function(){showRightBar()},100);
    	}else{
    		$(".rightbar").addClass("rightbar_slide_out");
    		$(".rightbar").removeClass("rightbar_slide_in");
    		setTimeout(function(){showRightBar()},100);
    	}
    }
}