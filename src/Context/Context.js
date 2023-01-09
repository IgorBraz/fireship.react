import React from 'react';
import './style.css';
import Count from './Count'
import CountButton from './CountButton';

class Context extends React.Component {
    render() {
        return (<div>
            <Count></Count>
            <CountButton></CountButton>
        </div>);
    }
}

export default Context;