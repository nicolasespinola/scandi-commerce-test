import React from "react";
import { Link, Outlet } from "react-router-dom";
import { graphql } from 'react-apollo';
import {getCategories} from '../queries/queries';
import Logo from '../assets/ui/logo-ui.svg';
import Cart from '../assets/ui/cart.svg';
import Dollar from '../assets/ui/dollar-sign.svg';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayCategories(){
        var data = this.props.data;
        if(data.loading){
            return('Loading..')
        }
        else {
            return data.categories.map(c => {
                return (<a className="label">{c.name}</a>)
            })
        }
    }

    render() {
        return(
            <div className="navbar-wrapper">
                <div className="navbar-wrapper w-navbar-wrapper">
                    {this.displayCategories()}
                </div>
                <img src={Logo} alt="logo" />
                <div className="navbar-wrapper w-navbar-wrapper">
                    <div className="w-40p"/>
                    <div className="w-40p"/>
                    <img src={Dollar} alt="Current currency" className="w-40p"/>
                    <img src={Cart} alt="My cart" width={"25px"}/>
                </div>                
            </div>
        );
    }
}

export default graphql(getCategories)(NavBar);
