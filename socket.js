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
		socket.send("65");
	}
}

//Sending keystroke:::: socket.send(keyCode.toString());
