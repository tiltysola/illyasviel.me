if(IsPC()){
	(function() {
	  // Init
	  var container = document.getElementsByTagName('body')[0],
	      inner = document.getElementsByClassName('main')[0];

	  // Mouse
	  var mouse = {
	    _x: 0,
	    _y: 0,
	    x: 0,
	    y: 0,
	    updatePosition: function(event) {
	      var e = event || window.event;
	      this.x = e.clientX - this._x;
	      this.y = (e.clientY - this._y) * -1;
	    },
	    setOrigin: function(e) {
	      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
	      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
	    },
	    show: function() {
	      return "(" + this.x + ", " + this.y + ")";
	    }
	  };

	  // Track the mouse position relative to the center of the container.
	  mouse.setOrigin(container);

	  //----------------------------------------------------

	  var counter = 0;
	  var refreshRate = 1;
	  var isTimeToUpdate = function() {
	    return counter++ % refreshRate === 0;
	  };

	  //----------------------------------------------------

	  var onMouseEnterHandler = function(event) {
	    update(event);
	  };

	  var onMouseLeaveHandler = function() {
	    inner.style = "";
	  };

	  var onMouseMoveHandler = function(event) {
	    if (isTimeToUpdate()) {
	      update(event);
	    }
	  };

	  //----------------------------------------------------

	  var update = function(event) {
	    mouse.updatePosition(event);
	    updateTransformStyle(
	      (mouse.y / inner.offsetHeight / 2).toFixed(2),
	      (mouse.x / inner.offsetWidth / 2).toFixed(2)
	    );
	  };

	  var updateTransformStyle = function(x, y) {
	    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
	    inner.style.transform = style;
	    inner.style.webkitTransform = style;
	    inner.style.mozTranform = style;
	    inner.style.msTransform = style;
	    inner.style.oTransform = style;
	  };

	  //--------------------------------------------------------

	  container.onmousemove = onMouseMoveHandler;
	  container.onmouseleave = onMouseLeaveHandler;
	  container.onmouseenter = onMouseEnterHandler;
	})();
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