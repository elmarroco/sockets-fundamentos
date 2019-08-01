const socket = io();
// Escuchar conexión
socket.on("connect", () => {
  console.log("Connectado al servidor");
});
// Escuchar desconexión
socket.on("disconnect", () => {
  console.log("Perdimos conexión con el servidor");
});

// Escuchar enviar mensaje
socket.on("enviarMensaje", mensaje => {
  console.log("Servidor: ", mensaje);
});

// Enviar información
socket.emit(
  "enviarMensaje",
  {
    usuario: "Jose",
    mensaje: "Hola Mundo"
  },
  resp => {
    console.log("respuesta server: ", resp);
  }
);
