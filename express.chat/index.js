const express = require('express')
const ws = require('ws')
const http = require("http")

const app = express()
const server = http.createServer( app )
const WebSocketServer = new ws.Server( { server } )

const clients = []
WebSocketServer.on("connection", function (ws) {
    ws.on('message', msg => {
        const data = JSON.parse(msg);
        if (data.status == 'get-connection') {
            if ( clients.map( i => i.username ).includes(data.username) )
                ws.send( JSON.stringify( {
                    status: 'error-connection',
                    info: 'This name is already taken!'
                } ) )
            else {
                clients.push( {
                    username: data.username,
                    socket: ws
                } )
                for (let client of clients) {
                    if (client.socket != ws)
                        client.socket.send( JSON.stringify( {
                            status: 'new-connection',
                            username: data.username 
                        } ) )
                    else {
                        client.socket.send( JSON.stringify( {
                            status: 'good-connection',
                            info: clients.map( i => i.username ).filter( i => i!= data.username )
                        } ) )
                    }                 
                }
            }
        }
        else {
            // const sender = clients.filter( i => i.socket == ws )[0].username
            // const recipient = clients.filter( i => i.socket == ws )[0].username
            // recipient.send( JSON.stringify({
            //     status: 'new-message',
            //     username: data.username,
            //     info: data.info
            // }) ) // TODO
        }
    })
    ws.on('close', () => {
        console.log('bb')
    })
})

server.listen(8080)