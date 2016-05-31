window.onload = function() {
 
	function hasClass(obj, cls) {
		return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	}

	function removeClass(obj, cls) {
		if (hasClass(obj, cls)) {
			var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
			obj.className = obj.className.replace(reg, ' ');
		}
	}

	var pages = document.getElementsByClassName('pages');

	var swipe = document.getElementsByClassName('buttom-swipe-tip')[0];

	var index = 1;
	pages[0].style.zIndex = index;

	var pagesNode = pages[0].getElementsByClassName('animations');
	for (var i = 0; i < pagesNode.length; i++) {

		pagesNode[i].style.display = 'block';
	}

	
	var slup=function() {
		if (index == pages.length) {
			return;
		}
		removeClass(pages[index-1],'pageIn');
		pages[index-1].className+=" pageOut";
		
		pages[index].className += " pageIn";
		var pagesNode = pages[index].getElementsByClassName('animations');

		for (var i = 0; i < pagesNode.length; i++) {

			pagesNode[i].className += " page" + (index + 1) + "-animation" + (1 + i);
			//pagesNode[i].style.display = 'inline-block';
		}
		
		pages[index].style.zIndex = ++index;

	}

	
	$('.contentbox').swipeUp(slup);

	function controlMusic(){
		var control=document.getElementsByClassName('music-in')[0];
		var audiotap=document.getElementById('music-audio');
		var play=true;
		
		
		control.onclick=function(){
			if(play){
			    audiotap.pause();
			    play=false;
			}
		   else{
		   	   audiotap.play();
		   	   play=true;
		   }
		}
		
	}
	controlMusic();
}