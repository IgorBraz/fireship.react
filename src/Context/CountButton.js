import React from 'react';
import './style.css';
import { CountContext } from './count-context';

class CountButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const [count, setContextCount] = this.context;

        setContextCount(count + 1);
    }

    render() {
        return (<button onClick={this.handleClick}>Increment</button>);
    }
}
CountButton.contextType = CountContext;
export default CountButton;