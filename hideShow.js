var $ = document;
var x = 0;

// how to call this function in our file 1. import this file in your file 2. Then call this function like main(which button, which Event, user define function name, user define function name)

function main(button, clk , FirstClick, SecondClick){
	function click(){
		if (x == 0) {
			FirstClick();
			x = 1;
		}
		else{
			SecondClick();
			x = 0;
		}
	}
	button.addEventListener(clk, click);
}

// toggle button...... 
// call this function(which button, which Event, which parameter, (this is optional) use h or d)

function toggle(button, clk , para, dis){
	function click(){
		if (x == 0) {
			if (dis == "h") {
				document.querySelector(para).style.visibility = "hidden";
			}
			else if (dis == "d" || dis == undefined){
				document.querySelector(para).style.display = "none";
			}
			else{
				alert("you Entered the invalid parameter in toggle function");
			}
			x = 1;
		}
		else{
			if (dis == "h") {
				document.querySelector(para).style.visibility = "visible";
			}
			else if (dis == "d" || dis == undefined) {
				document.querySelector(para).style.display = "";
			}
			else{
				alert("you Entered the invalid parameter in toggle function");
			}
			x = 0;
		} 
	}
	button.addEventListener(clk, click);
}
