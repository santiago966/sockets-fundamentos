const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');


    client.on('disconnect', function() {
        console.log('Usuario desconectado');
    });

    //Escuchar cliente
    client.on('Enviarmensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('Enviarmensaje', data);

    });

    client.emit('Enviarmensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido'
    });
});