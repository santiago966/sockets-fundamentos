var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});
// on es para Escuchar información
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//Emit es para Enviar información
socket.emit('Enviarmensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

socket.on('Enviarmensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});