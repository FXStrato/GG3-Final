var socket;
var shiftKey = false;
var shiftMappings = [[49, 39, 51, 52, 53, 55, 34, 57, 48, 56, 61, 60, 95, 62, 63, 41, 33, 64, 35, 36, 37, 94, 38, 42, 40, 59, 58, 44, 43, 46, 47, 50, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 54, 45, 126, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 96]];
window.onload = function () {
    var ip = location.host.split(":");
	if (ip[0] == '') {
        ip[0] = "localhost";
    }
    socket = new WebSocket("ws://" + ip[0] + ":9000");
    
    socket.onopen = function (event) {
        window.addEventListener("keydown", sendKey, false);
    };

    socket.onmessage = function (event) {
        console.log(event.data);
    };
};

function sendKey(event) {
    var keyCode = event.keyCode;
    if (keyCode != 16) {
        if (keyCode >= 65 && keyCode <= 90) {
            keyCode += 32;
        }
        if (event.shiftKey) {
            keyCode = shiftMappings[0][keyCode - 33];
        }
        console.log(keyCode);
        socket.send(keyCode.toString());
    }
}