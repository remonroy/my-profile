import React from 'react'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

const Smain = () => {
    return (
        ReactDOM.render(
            <div style={{ height: 500, width: "100%", background: '#282c34',}}>
             <div style={{overflow:"hidden"}}>
             <Snowfall />
             </div>
            </div>,
            document.querySelector('#root')
          )
    );
};

export default Smain;