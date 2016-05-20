Pre-Reqs
 - Python 3.5
 - .NET Framework 4.6

Steps to Run
 1. Launch TextTest
 2. Configure TextTest to receive data over the network (use default 9080 port)
 3. Launch WebSocket Server
 4. Launch HTML File (Recommended to open console to monitor output, MUST click out of console to register keys)

Minimum Code for JS
   socket = new WebSocket("ws://localhost:9000");
   socket.send("97");

NOTE: It is recommended to NOT capture keys until after socket.onopen has been called.  (See example)

ASCII Conversion: Use the DEC column to find the proper ASCII code