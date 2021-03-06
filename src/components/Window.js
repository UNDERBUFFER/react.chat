import React from 'react';
import LevelMenu from './LeftMenu';
import RightArea from './RightArea';

const style = {
    border: '10px solid rgb(97, 218, 251)',
    position: 'absolute',
    height: '80%',
    width: '60%',
    marginLeft: '20%',
    marginTop: '5%',
    borderRadius: '2%'
}

export default () => {
    return <div id='window' style={style}>
        <LevelMenu />
        <RightArea />
    </div>
}