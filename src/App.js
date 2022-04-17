import React, { Component } from 'react';
import Home from './pages/Home.jsx';
// apollo client setup

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Home selected={this.props.selected} />;
    }
}

export default App;
