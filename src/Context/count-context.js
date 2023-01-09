import React from 'react';

export const CountContext = React.createContext({ count1: 0, setCount: () => { } });
class CountContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.setCount = this.setCount.bind(this);
    }

    setCount(value) {
        this.setState({ count: value });
    }

    render() {
        return (<CountContext.Provider value={{ count: this.state.count, setCount: this.setCount }}>
            {this.props.children}
        </CountContext.Provider>);
    }
}

export default CountContextProvider;