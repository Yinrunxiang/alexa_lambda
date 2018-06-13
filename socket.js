'use strict';

var dgram = require("dgram");
var socket = dgram.createSocket("udp4");
socket.bind(0, '0.0.0.0', function () {
    // socket.setBroadcast(true);
});
const api = {
    send(message) {
        socket.send(message, 0, message.length, 8000, '39.108.129.244', function (err, bytes) {
            socket.close();
        });
    }
}
module.exports = api