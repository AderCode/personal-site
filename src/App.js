import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import { Home, About, Work, Experience, Blog } from './pages/index';

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Route path="/" exact component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/work" component={ Work } />
                <Route path="/experience" component={ Experience } />
                {/* <Route path="/blog" component={ Blog } /> */}
            </Router>
        );
    }
}

export default App;