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
    return <div class="chater" style={style.chaterBlock}>
        <img id='avatar' src='/favicon.ico' style={style.avatar}></img>
        <div id='username' style={style.username}>никитos</div>
        <div id='last-message' style={style.lastMessage}> my message</div>
        {/* <img id='avatar' style={style.avatar}></img>
        <div id='username' style={style.username}></div>
        <div id='last-message' style={style.lastMessage}></div> */}
    </div>
}