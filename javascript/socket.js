var socket;
var shift = false;
var triq = {};
var ascii = {};
var fbuttons = new Array("abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yz");
var slider = $('#slider').CircularSlider({
    radius: 150,
    innerCircleRatio: '0.2',
    handleDist: 98,
    min: 0,
    max: 100,
    value: 50,
    clockwise: true,
    labelSuffix: "",
    labelPrefix: "",
    shape: "Half Circle Left",
    touch: true,
    animate: true,
    animateDuration : 360,
    selectable: false,
    slide: function(ui, value) {},
    onSlideEnd: function(ui, value) {
    	if(value > 60 || value < 40) {
    		//Go into shift mode, or get out if already in.
    		if(!shift) {
    			shift = true;
    			shiftImages();
    		} else {
    			shift = false;
    			shiftImages();
    		}
    		slider.setValue(50);
    	}
    },
    formLabel: undefined
});

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
	triq['yz'] = ["y", "z", "space", "del"];
	triq['y'] = ["y", "z", "space", "del"]; 
	triq['z'] = ["y", "z", "space", "del"]; 
	triq['space'] = ["y", "z", "space", "del"]; 
	triq['del'] = ["y", "z", "space", "del"]; 



	//2. Letters to ascii code. Use decimal code
	ascii['a2'] = "65";
	ascii['b2'] = "66";
	ascii['c2'] = "67";
	ascii['d2'] = "68";
	ascii['e2'] = "69";
	ascii['f2'] = "70";
	ascii['g2'] = "71";
	ascii['h2'] = "72";
	ascii['i2'] = "73";
	ascii['j2'] = "74";
	ascii['k2'] = "75";
	ascii['l2'] = "76";
	ascii['m2'] = "77";
	ascii['n2'] = "78";
	ascii['o2'] = "79";
	ascii['p2'] = "80";
	ascii['q2'] = "81";
	ascii['r2'] = "82";
	ascii['s2'] = "83";
	ascii['t2'] = "84";
	ascii['u2'] = "85";
	ascii['v2'] = "86";
	ascii['w2'] = "87";
	ascii['x2'] = "88";
	ascii['y2'] = "89";
	ascii['z2'] = "90";
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
	ascii['y'] = "121";
	ascii['z'] = "122";
	ascii["space"] = "32";
	ascii['del'] = "8";
    
};

//Sends ascii code of inputted character to testtext
function send(data) {

	if(triq[data] != -1) {
		for(i = 0; i < triq[data].length; i++) {
			document.getElementById(triq[data][i]).style.display = "none";
		}

		var result = document.getElementById("maininput").value;
		//Check for space or delete
		if(data == "space") {
			result += " ";
			socket.send(ascii[data]);
		} else if (data =="del") {
			result = result.slice(0,-1);
			socket.send(ascii[data]);
		} else {
			//if shift mode is on, then make it upper case.
			if(shift) {
				result += data.toUpperCase();
				var packet = data + "2";
				socket.send(ascii[packet]);
			} else {
				result += data;
				socket.send(ascii[data]);
			}
		}
		document.getElementById("maininput").value = result;
		loseFocus();
		for(i = 0; i < fbuttons.length; i++) {
			if(fbuttons[i] != data) {
				$("#" + fbuttons[i]).css("visibility", "visible");
			}
		}
	}
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
	document.getElementById('maininput').focus();
}


function connect() {
	//Attempt connection to testtext via websocket. Don't forget to run that special socket to tcp program.
	document.getElementById('check').value = "Loading...";
	document.getElementById('checkbtn').innerHTML = "Loading";
	    var ip = location.host.split(":");
		if (ip[0] == '') {
	        ip[0] = "localhost";
	    }
		socket = new WebSocket("ws://" + ip[0] + ":9000");

	    socket.onopen = function (event) {
	        document.getElementById('check').value = "Socket created. Make sure tcp/socket program is connected.";
	        document.getElementById('checkbtn').innerHTML = "Reconnect";
	    };

	    socket.onmessage = function (event) {
		};

		socket.onerror = function (event) {
			document.getElementById('check').value = "Socket could not connect.";
			document.getElementById('checkbtn').innerHTML = "Attempt reconnect";
		};

		loseFocus();
}

function clearinput() {
	var result = "";
	document.getElementById("maininput").value = result;
	loseFocus();
}

//Change images depending on if shift mode is activated.
function shiftImages() {
	if(shift) {
		for(var key in triq) {
	    	if(key == "space" || key == "del") {
	    	} else {
	    		document.getElementById(key).src = "images/" + key + "2.svg";
	    	}
	    }
	} else {
		for(var key in triq) {
	    	if(key == "space" || key == "del") {
	    	} else {
	    		document.getElementById(key).src = "images/" + key + ".svg";
	    	}
   		}
	}
    
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
