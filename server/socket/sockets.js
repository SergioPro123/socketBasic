const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Cliente Conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    //Escuchamos al cliente
    client.on('enviarMensaje', (msj, callback) => {
        console.log(msj);
        callback();
    });

    client.on('chatSala', (msj) => {
        client.broadcast.emit('chatSala', msj);
    });


    //Enviamos información al Cliente
    client.emit('enviarMensaje', {
        usuario: 'AdminServer',
        mensaje: 'Bienvenido a mi aplicación.'
    });
});