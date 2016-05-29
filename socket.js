var socket;
var triq = {};
var ascii = {};
var fbuttons = new Array("abcd", "efgh", "ijkl", "mnop", "qrst");

window.onload = function () {
	//Creating relational dictionaries
	//1. One for triple/quarters to single letters
	triq['abcd'] = ["a", "b", "c", "d"];
	triq['a'] = ["a", "b", "c", "d"];
	triq['b'] = ["a", "b", "c", "d"];
	triq['c'] = ["a", "b", "c", "d"];
	triq['d'] = ["a", "b", "c", "d"];
	triq['efgh'] = ["e", "f", "g", "h"];
	triq['e'] = ["e", "f", "g", "h"];
	triq['f'] = ["e", "f", "g", "h"];
	triq['g'] = ["e", "f", "g", "h"];
	triq['h'] = ["e", "f", "g", "h"];
	triq['ijkl'] = ["i", "j", "k", "l"];
	triq['i'] = ["i", "j", "k", "l"];
	triq['j'] = ["i", "j", "k", "l"];
	triq['k'] = ["i", "j", "k", "l"];
	triq['l'] = ["i", "j", "k", "l"];
	triq['mnop'] = ["m", "n", "o", "p"];
	triq['m'] = ["m", "n", "o", "p"];
	triq['n'] = ["m", "n", "o", "p"];
	triq['o'] = ["m", "n", "o", "p"];
	triq['p'] = ["m", "n", "o", "p"];
	triq['qrst'] = ["q", "r", "s", "t"];
	triq['q'] = ["q", "r", "s", "t"];
	triq['r'] = ["q", "r", "s", "t"];
	triq['s'] = ["q", "r", "s", "t"];
	triq['t'] = ["q", "r", "s", "t"];
	triq['uvwx'] = ["u", "v", "w", "x"];
	triq['u'] = ["u", "v", "w", "x"];
	triq['v'] = ["u", "v", "w", "x"];
	triq['w'] = ["u", "v", "w", "x"];
	triq['x'] = ["u", "v", "w", "x"];


	//2. Letters to ascii code. Use decimal code
	ascii['a'] = "97";
	ascii['b'] = "98";
	ascii['c'] = "99";
	ascii['d'] = "100";
	ascii['e'] = "101";
	ascii['f'] = "102";
	ascii['g'] = "103";
	ascii['h'] = "104";
	ascii['i'] = "105";
	ascii['j'] = "106";
	ascii['k'] = "107";
	ascii['l'] = "108";
	ascii['m'] = "109";
	ascii['n'] = "110";
	ascii['o'] = "111";
	ascii['p'] = "112";
	ascii['q'] = "113";
	ascii['r'] = "114";
	ascii['s'] = "115";
	ascii['t'] = "116";
	ascii['u'] = "117";
	ascii['v'] = "118";
	ascii['w'] = "119";
	ascii['x'] = "120";

	//Attempt connection to testtext via websocket. Don't forget to run that special socket to tcp program.
	try {
    var ip = location.host.split(":");
	if (ip[0] == '') {
        ip[0] = "localhost";
    }
	socket = new WebSocket("ws://" + ip[0] + ":9000");

    socket.onopen = function (event) {
        
    };

    socket.onmessage = function (event) {
        console.log(event.data);
	    };
	} catch(err) {
		console.log("Unable to connect through websocket to TextTest");
	}
    
};

//Sends ascii code of inputted character to testtext
function send(data) {

	if(triq[data] != -1) {
		for(i = 0; i < triq[data].length; i++) {
			document.getElementById(triq[data][i]).style.display = "none";
		}
		var result = document.getElementById("maininput").value;
		result += data;
		document.getElementById("maininput").value = result;
		document.activeElement.blur();
		for(i = 0; i < fbuttons.length; i++) {
			if(fbuttons[i] != data) {
				$("#" + fbuttons[i]).css("visibility", "visible");
			}
		}
	}

	// if(data == "A") {
	// 	console.log("A was printed");
	// 	//socket.send("65");
	// }
	// else if(data == "a") {
	// 	var result = document.getElementById("maininput").value;
	// 	result += "a";
	// 	document.getElementById("maininput").value = result;
	// 	document.activeElement.blur();
	// 	document.getElementById("a").style.display = "none";
	// 	document.getElementById("b").style.display = "none";
	// 	document.getElementById("c").style.display = "none";
	// 	document.getElementById("d").style.display = "none";

	// 	//socket.send("65");
	// }
	// else if(data == "b") {
	// 	var result = document.getElementById("maininput").value;
	// 	result += "b";
	// 	document.getElementById("maininput").value = result;
	// 	document.activeElement.blur();
	// 	document.getElementById("a").style.display = "none";
	// 	document.getElementById("b").style.display = "none";
	// 	document.getElementById("c").style.display = "none";
	// 	document.getElementById("d").style.display = "none";
	// 	//socket.send("65");
	// }
	// else if(data == "c") {
	// 	var result = document.getElementById("maininput").value;
	// 	result += "c";
	// 	document.getElementById("maininput").value = result;
	// 	document.activeElement.blur();
	// 	document.getElementById("a").style.display = "none";
	// 	document.getElementById("b").style.display = "none";
	// 	document.getElementById("c").style.display = "none";
	// 	document.getElementById("d").style.display = "none";

	// 	//socket.send("65");
	// } else if(data == "d") {
	// 	var result = document.getElementById("maininput").value;
	// 	result += "d";
	// 	document.getElementById("maininput").value = result;
	// 	document.activeElement.blur();
	// 	document.getElementById("a").style.display = "none";
	// 	document.getElementById("b").style.display = "none";
	// 	document.getElementById("c").style.display = "none";
	// 	document.getElementById("d").style.display = "none";

	// 	//socket.send("65");
	// }
}

function showSecond(data) {

	if(triq[data] != -1) {
		if(document.getElementById(triq[data][0]).style.display == "inline") {
			for(i = 0; i < triq[data].length; i++) {
				document.getElementById(triq[data][i]).style.display = "none";
			}
			for(i = 0; i < fbuttons.length; i++) {
				if(fbuttons[i] != data) {
					$("#" + fbuttons[i]).css("visibility", "visible");
					//document.getElementById(fbuttons[i]).style.display = "inline";
				}
			}
		} else {
			for(i = 0; i < triq[data].length; i++) {
				document.getElementById(triq[data][i]).style.display = "inline";
			}
			for(i = 0; i < fbuttons.length; i++) {
				if(fbuttons[i] != data) {
					$("#" + fbuttons[i]).css("visibility", "hidden");
					//document.getElementById(fbuttons[i]).style.display = "none";
				}
			}
		}
	} else {
		console.log("Haven't implemented buttons yet");
	}
}

function loseFocus() {
	document.activeElement.blur();
}

//Sending keystroke:::: socket.send(keyCode.toString());


/*
Use two dictionaries to store the relations. 
One dictionary will be used to store the letter to triple/quad buttons, like "a" --> "abcd", and 
"abcd" --> "a", "b", etc. 
Another dictionary will be used to store letter to ascii code. Don't forget to include the upper and lower case.
We won't be using uppercase since the testtext doesn't use upper cases or special punctuation, but it would be nice
to have if we have time.
*/
