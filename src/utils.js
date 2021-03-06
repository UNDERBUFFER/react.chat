
const url = new URL( document.URL )
const socket = new WebSocket( `ws://localhost:8080/` )

socket.onmessage = () => {}
socket.onclose = () =>  {}