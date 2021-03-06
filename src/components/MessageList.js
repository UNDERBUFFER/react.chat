import React from 'react';

const style = {
    height: '80%',
    width: '100%',
    overflowY: 'scroll'
}

export default () => {
    return <div id='messages' style={style}></div>
}