import React from 'react';
import './style.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        const { hr, min, sec } = this.props;

        this.state = {
            paused: true,
            over: false,
            h: hr,
            m: min,
            s: sec
        };

        this.ticker = null;

        this.ticker = this.tick.bind(this);
    }

    componentDidMount() {
        this.ticker = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
        debugger;
        clearInterval(this.ticker);
    }

    format(value) {
        return value.toString().padStart(2, '0');
    }

    tick() {
        if (this.state.paused || this.state.over) {
            return;
        }

        if (this.state.h === 0 && this.state.m === 0 && this.state.s === 0) {
            this.setState({ over: true });
        } else if (this.state.m === 0 && this.state.s === 0) {
            this.setState({ h: this.state.h - 1, m: 59, s: 59 });
        } else if (this.state.s === 0) {
            this.setState({ m: this.state.m - 1, s: 59 });
        } else {
            this.setState({ s: this.state.s - 1 });
        }
    }

    render() {
        const { hr, min, sec } = this.props;

        return <>
            <h3 className='countdown'>{`${this.format(this.state.h)}:${this.format(this.state.m)}:${this.format(this.state.s)}`}</h3>
            <button onClick={() => this.setState({ paused: !this.state.paused })}>{this.state.paused ? 'Start' : 'Pause'}</button>
            <button onClick={() => this.setState({ h: hr, m: min, s: sec, paused: true, over: false })}>Reset</button>
        </>
    }

}



export default Timer;