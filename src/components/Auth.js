import React from 'react';
import { socket } from '../utils';

const style = {
    general: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(25, 51, 94)',
        display: 'inline'
    },
    window: {
        marginLeft: '30%',
        marginTop: '15%',
        width: '40%',
        height: '50%',
        backgroundColor: 'rgb(214, 227, 244)'
    },
    error: {
        marginTop: '8%',
        marginLeft: '5%',
        width: '90%',
        height: '20%',
        backgroundColor: 'white',
        float: 'left',
        display: 'inline',
        color: 'green',
        textAlign: 'center',
        lineHeight: '80px',
        fontSize: '30px'
    },
    input: {
        marginTop: '5%',
        marginLeft: '5%',
        width: '90%',
        height: '20%',
        color: 'white',
        backgroundColor: 'gray',
        display: 'inline',
        textAlign: 'center',
        fontSize: '25px',
    },
    button: {
        marginTop: '5%',
        marginLeft: '5%',
        width: '90%',
        height: '20%',
        color: 'white',
        backgroundColor: 'rgb(0, 168, 255)',
        textAlign: 'center',
        fontSize: '20px',
        textShadow: '1px 1px 2px black, 0 0 1em blue'
    },
}

export default () => {
    return <div style={style.general}>
        <div style={style.window}>
            <div style={style.error} id='login-error'>Enter your name</div>
            <input type='text' style={style.input} placeholder='username' id='enterred-username'/>
            <button style={style.button} id='start-chating' onClick={() => {
                const username = document.getElementById('enterred-username').value
                socket.send( JSON.stringify({
                    status: 'get-connection',
                    username
                }) )
                localStorage.setItem('username', username)
            }}>SUBMIT</button>
        </div>
    </div>
}