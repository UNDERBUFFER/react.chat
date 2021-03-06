import React from 'react';
import ReactDOM from 'react-dom';
import Window from './components/Window';
import Chater from './components/Chater';
import { socket } from './utils';

socket.onmessage = (event => {
    let data = JSON.parse(event.data);
    if (data.status == 'good-connection') {
        ReactDOM.render(
            <React.StrictMode>
                <Window />
            </React.StrictMode>,
            document.getElementById('root')
        );
        ReactDOM.render(
            <React.StrictMode>
                { data.info.map( username => <Chater username={username}/> ) }
            </React.StrictMode>,
            document.getElementById('level-menu')
        );
    }
    else {
        const div = document.getElementById('login-error');
        div.innerText = data.info || 'ERROR';
        div.style.color = 'red';
    }
})