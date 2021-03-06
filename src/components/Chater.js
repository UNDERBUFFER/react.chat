import React from 'react';
import ReactDOM from 'react-dom';
import AddingMessage from './AddingMessage';
import MessageList from './MessageList';
import Message from './Message';

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
    return <div className="chater" style={style.chaterBlock} id={props.username} onClick={() => {
        ReactDOM.render(
            <React.StrictMode>
                <MessageList />
                <AddingMessage />
            </React.StrictMode>,
            document.getElementById('right-area')
        );

        const messages = ['HI', 'Hello!', 'Fine', 'Good:)', 'JabaScript is mem', 'Ahahahah', 'LOL', 'Any listeners for the error event should have a callback with one argument to capture the Error object and gracefully handle it. If an EventEmitter emits an error event, but there are no listeners subscribed for error events, the Node.js program would throw the Error that was emitted.', 'This will ultimately stop the Node.js process from running and exit your program, while displaying the stacktrace for the error in the console.', 'Event-driven architecture allows us to create systems which are decoupled but highly cohesive. Events represent the result of a certain action, and 1..n listeners can be defined to listen and react to them.'].sort(() => Math.random() - 0.5); // TODO
        ReactDOM.render(
            <React.StrictMode>
                { messages.map( text => <Message username={props.username} message={text}/> ) }
            </React.StrictMode>,
            document.getElementById('messages')
        ); // TODO

        for (let block of document.getElementsByClassName('chater'))
            block.style.backgroundColor = 'rgb(70, 79, 89)'
        document.getElementById(props.username).style.backgroundColor = 'rgb(22, 28, 35)'
    }}>
        <img className='avatar' src='/favicon.ico' style={style.avatar}></img> {/* TODO */}
        <div className='username' style={style.username}>{props.username}</div>
        <div className='last-message' style={style.lastMessage}><em>Напишите первым!</em></div>
    </div>
}