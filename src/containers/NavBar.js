import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar className="fixed-top bg-light shadow-sm" color="inverse" light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="w-100" tabs>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/" className="text-dark">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/about" className="text-dark">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/work" className="text-dark">Work</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/experience" className="text-dark">Experience</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink tag={RRNavLink} to="/blog" className="text-dark">Blog</NavLink>
                        </NavItem> */}
                    </Nav>
                </Collapse>
                <NavbarBrand className="ml-4"><a href="https://www.linkedin.com/in/matthew-aderhold/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" alt="Linkedin link" /></a> <a href="https://github.com/AderCode" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" alt="Github link" /></a> <a href="mailto:contact@matthewaderhold.dev"><i className="far fa-envelope" alt="Contact" /></a></NavbarBrand>
            </Navbar>
        );
    }
}

export default NavBar;