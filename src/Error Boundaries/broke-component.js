import React from 'react';
import './style.css';

class BrokeComponent extends React.Component {
    render() {
        let obj = null;
        //throwing on purpose
        return (<h3>Rendering {obj.break}</h3>);
    }
}

export default BrokeComponent;