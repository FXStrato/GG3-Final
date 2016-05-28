var socket;
var triq = {};
var ascii = {};
var fbuttons = new Array("abcd", "efgh", "ijkl");

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

//right now, need a function to send the ascii code of the character I want to input to testext. 
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
				//document.getElementById(fbuttons[i]).style.display = "inline";
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
	}
	// if(data == "abcd") {
	// 		if(document.getElementById("a").style.display == "inline") {
	// 			document.getElementById("a").style.display = "none";
	// 			document.getElementById("b").style.display = "none";
	// 			document.getElementById("c").style.display = "none";
	// 			document.getElementById("d").style.display = "none";
	// 		} else {
	// 			document.getElementById("a").style.display = "inline";
	// 			document.getElementById("b").style.display = "inline";
	// 			document.getElementById("c").style.display = "inline";
	// 			document.getElementById("d").style.display = "inline";
	// 		}
	// 	}
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
