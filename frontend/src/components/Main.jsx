import React from 'react';


function Main(props) {
    const style = {
        flexGrow: 1,
        height: 800
    }
    return (<main style={style}>
        {props.children}
    </main>);
}

export default Main;
