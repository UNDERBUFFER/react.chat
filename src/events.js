import React from 'react';
import ReactDOM from 'react-dom';
import Window from './components/Window';
import Chater from './components/Chater';
import { socket } from './utils';

export const MESSAGE_LIST = {}

socket.onmessage = (event => {
    let data = JSON.parse(event.data);
    if (data.status == 'good-connection') {
        ReactDOM.render(
            <React.StrictMode>
                <Window />
            </React.StrictMode>,
            document.getElementById('root')
        );
        data.info.forEach( username => MESSAGE_LIST[username] = [] )
        ReactDOM.render(
            <React.StrictMode>
                { data.info.map( username => <Chater username={username}/> ) }
            </React.StrictMode>,
            document.getElementById('level-menu')
        );
    }
    else if (data.status == 'error-connection') {
        const div = document.getElementById('login-error');
        div.innerText = data.info || 'ERROR';
        div.style.color = 'red';
    }
    else {
        if (data.status == 'new-connection')
            MESSAGE_LIST[data.username] = []
        else
            MESSAGE_LIST[data.username].push({username: data.username, message: data.info})
    }
})