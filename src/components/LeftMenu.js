import React from 'react';

const style = {
    position: 'absolute',
    height: '100%',
    width: '28.5%',
    borderRight: '1.5vw solid rgb(101, 168, 188)',
    backgroundColor: 'rgb(70, 79, 89)',
    display: 'inline',
    overflowY: 'scroll'
}

export default () => {
    return <div id='left-menu' style={style}>
    </div>
}