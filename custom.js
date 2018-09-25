var f = document.getElementsByClassName("site-info container");
f[0].innerHTML = "Copyright " + <?php echo date('Y'); ?> + " CIL Decor SRL";

/*if scroll>50 top*/
function pageScroll10() {

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
     x[0].style.position ="static";
     x[0].style.maxHeight ="50px";
     x[0].src= "http://cildecor.com/wp-content/uploads/2017/05/SmallLogo3.png";
    } else {
     x[0].style.position ="fixed";
     x[0].style.maxHeight ="250px";
     x[0].src = "http://cildecor.com/wp-content/uploads/2017/05/BigLogo4.png";
    }
}


/*if is mobile*/
var x = document.getElementsByClassName("site-logo");
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(screen.width<1920) ) {
x[0].src= "http://cildecor.com/wp-content/uploads/2017/05/SmallLogo3.png";
x[0].style.position ="static";
x[0].style.maxHeight ="50px";
}
else{
window.onscroll = function() {pageScroll10()};
}
