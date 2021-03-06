import React from 'react';
import ReactDOM from 'react-dom';
import AddingMessage from './AddingMessage';
import MessageList from './MessageList';

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

export default (props) => {
    return <div className="chater" style={style.chaterBlock} onClick={() => {
        ReactDOM.render(
            <React.StrictMode>
                <MessageList />
                <AddingMessage />
            </React.StrictMode>,
            document.getElementById('right-area')
        );
    }}>
        <img className='avatar' src='/favicon.ico' style={style.avatar}></img> {/* TODO */}
        <div className='username' style={style.username}>{props.username}</div>
        <div className='last-message' style={style.lastMessage}><em>Напишите первым!</em></div>
    </div>
}