const express = require('express')
const ws = require('ws')
const http = require("http")

const app = express()
const server = http.createServer( app )
const WebSocketServer = new ws.Server( { server } )

WebSocketServer.on("connection", function (ws) {
    console.log('ok')
    ws.on('message', msg => {
        console.log(msg)
    })
    ws.on('close', () => {
        console.log('bb')
    })
})

server.listen(8080)