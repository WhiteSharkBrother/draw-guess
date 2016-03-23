/**
 * Created by aaron on 3/22/16.
 */
(function () {
    var io;
    io = require('socket.io').listen(3555);
    io.sockets.on('connection', function (socket) {
        socket.on('drawing', function (data) {
            socket.broadcast.emit('drawed', {
                x: data.x,
                y: data.y,
                type: data.type,
                width: data.width,
                color: data.color
            });
        });
    });
}).call(this);