import React from 'react';

let style = {
    chaterBlock: {
        marginTop: '5%',
        width: '100%',
        height: '10%',
    },
    avatar: {
        height: '100%',
        width: '25%',
        float: 'left',
        borderRadius: '50%',
        marginLeft: '5%'
    },
    username: {
        height: '50%',
        width: '60%',
        marginLeft: '35%',
        color: 'white',
        fontSize: '15px'
    },
    lastMessage: {
        height: '50%',
        width: '60%',
        marginLeft: '35%',
        color: 'gray',
        fontSize: '15px'
    }
}

export default () => {
    return <div className="chater" style={style.chaterBlock}> {/* TODO */}
        <img className='avatar' src='/favicon.ico' style={style.avatar}></img> {/* TODO */}
        <div className='username' style={style.username}>usermem</div> {/* TODO */}
        <div className='last-message' style={style.lastMessage}> my message</div> {/* TODO */}
    </div>
}