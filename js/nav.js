/*打开侧栏，关闭顶栏*/
function openNav() {
	document.getElementById("Sidenav").style.width = "300px";
	document.getElementById("main").style.marginLeft = "300px";
	document.getElementById("Topnav").style.height = "0";
	document.getElementById("main").style.marginTop= "0";
}
/*关闭侧栏，打开顶栏*/
function closeNav() {
	document.getElementById("Sidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	document.getElementById("Topnav").style.height = "70px";
	document.getElementById("main").style.marginTop = "70px";
}
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}