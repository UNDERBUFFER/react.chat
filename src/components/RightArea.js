import React from 'react';
import AddingMessage from './AddingMessage';
import Message from './Message';

const style = {
    general: {
        position: 'absolute',
        height: '100%',
        marginLeft: '30%',
        width: '70%',
        backgroundColor: 'rgb(32, 36, 41)',
        display: 'inline'
    },
    messages: {
        height: '80%',
        width: '100%',
    }
}

export default () => {
    return <div id='right-area' style={style.general}>
        <div id='messages' style={style.messages}>
            <Message /> {/* TODO */}
            <Message /> {/* TODO */}
        </div>
        <AddingMessage />
    </div>
}