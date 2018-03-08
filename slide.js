
var target = 0;
var auto = false;
var imgs = document.getElementsByClassName("slideshow");
showCurrent();


function moveCurrent(n) {
	target += n;
    if (target > imgs.length-1) {
    	target = 0
    } 
    if (target < 0) {
    	target = imgs.length-1
    };
    showCurrent();
}

function showCurrent() {
    var i;
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none"; 
    }
    imgs[target].style.display = "block"; 
}

function moveAuto(){
	auto = true;
	autoSlide();
}

function moveStop(){
	auto = false;
}

function autoSlide(){
	if (auto) {
    	moveCurrent(1);
    	setTimeout(autoSlide, 2000);
	}
}