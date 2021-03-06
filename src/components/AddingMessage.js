import React from 'react';
import { socket } from '../utils';

const style = {
    general: {
        width: '90%',
        height: '10%',
        marginLeft: '5%',
        marginTop: '5%'
    },
    textarea: {
        height: '95%',
        width: '80%',
        resize: null,
        fontSize: '25px',
        backgroundColor: 'rgb(48, 60, 68)',
        color: 'white',
    },
    submit: {
        marginLeft: '5%',
        marginTop: '2px',
        height: '95%',
        width: '13%',
        position: 'relative',
        verticalAlign: 'top',
        fontSize: '30px',
        backgroundColor: 'rgb(77, 140, 216)',
        color: 'white',
        border: '4px solid rgb(146, 182, 198)',
        textShadow: '1px 1px 2px black, 0 0 1em pink'
    }
}

export default () => {
    return <div id='adding-message' style={style.general}>
        <textarea style={style.textarea} id="add-text"></textarea>
        <input type="button" style={style.submit} value="❱" onClick={() => {
            const div = document.getElementById('add-text')
            socket.send( JSON.stringify({
                status: 'new-message',
                // TODO
                info: div.value
            }) )
            div.value = ''
        }}/>
    </div>
}