import React from 'react';
import './style.css';
import { CountContext } from './count-context';

class Count extends React.Component {
    render() {
        const [count] = this.context;

        return (<h3>Current count: {count}</h3>);
    }
}

Count.contextType = CountContext;
export default Count;