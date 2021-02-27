import React from 'react';

let style = {
    message: {
        marginTop: '5%',
        width: '100%',
    },
    avatar: {
        height: '100%',
        width: '10%',
        float: 'left',
        borderRadius: '50%',
        marginLeft: '5%'
    },
    username: {
        height: '50%',
        width: '60%',
        marginLeft: '20%',
        color: 'rgb(115, 182, 242)',
        fontSize: '15px'
    },
    messageText: {
        height: '50%',
        width: '60%',
        marginLeft: '20%',
        color: 'white',
        fontSize: '15px'
    }
}

export default () => {
    return <div className='message' style={style.message}>
        <img className='avatar' src='/favicon.ico' style={style.avatar}></img> {/* TODO */}
        <div className='username' style={style.username}>usermem</div> {/* TODO */}
        <div className='last-message' style={style.messageText}>my messagemy messagemy messagemy messagemy messagemy messagemy messagemy messagemy messagemy messagemy messagemy messagemy message</div> {/* TODO */}
    </div>
}