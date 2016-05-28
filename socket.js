var socket;
window.onload = function () {
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
	if(data == "A") {
		console.log("A was printed");
		//socket.send("65");
	}
	else if(data == "a") {
		var result = document.getElementById("maininput").value;;
		result += "a";
		document.getElementById("maininput").value = result;
		document.activeElement.blur();
		document.getElementById("a").style.display = "none";
		document.getElementById("b").style.display = "none";
		document.getElementById("c").style.display = "none";
		document.getElementById("d").style.display = "none";

		//socket.send("65");
	}
	else if(data == "b") {
		var result = document.getElementById("maininput").value;;
		result += "b";
		document.getElementById("maininput").value = result;
		document.activeElement.blur();
		document.getElementById("a").style.display = "none";
		document.getElementById("b").style.display = "none";
		document.getElementById("c").style.display = "none";
		document.getElementById("d").style.display = "none";
		//socket.send("65");
	}
	else if(data == "c") {
		var result = document.getElementById("maininput").value;;
		result += "c";
		document.getElementById("maininput").value = result;
		document.activeElement.blur();
		document.getElementById("a").style.display = "none";
		document.getElementById("b").style.display = "none";
		document.getElementById("c").style.display = "none";
		document.getElementById("d").style.display = "none";

		//socket.send("65");
	} else if(data == "d") {
		var result = document.getElementById("maininput").value;;
		result += "d";
		document.getElementById("maininput").value = result;
		document.activeElement.blur();
		document.getElementById("a").style.display = "none";
		document.getElementById("b").style.display = "none";
		document.getElementById("c").style.display = "none";
		document.getElementById("d").style.display = "none";

		//socket.send("65");
	}
}

function showSecond(data) {
	if(data == "abc") {
			if(document.getElementById("a").style.display == "inline") {
				document.getElementById("a").style.display = "none";
				document.getElementById("b").style.display = "none";
				document.getElementById("c").style.display = "none";
				document.getElementById("d").style.display = "none";
			} else {
				document.getElementById("a").style.display = "inline";
				document.getElementById("b").style.display = "inline";
				document.getElementById("c").style.display = "inline";
				document.getElementById("d").style.display = "inline";
			}
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
